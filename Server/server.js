require('dotenv').config();
const express =require('express');
const app=express()
const cors = require('cors')
const cookieParser=require('cookie-parser')
const multer = require('multer')
const path = require('path')
const fetch = require('node-fetch');

//webhook
app.post('/webhook', express.raw({type: '*/*'}), async(request, response) => {
  const sig = request.headers['stripe-signature'];
  // console.log(sig);

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig,process.env.STRIPE_WEBHOOK_KEY);
  } catch (err) {
    console.log(err)
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      try {
        const bookingData = {
          Booking_ID: session.metadata.Booking_ID,
          No_of_Tickets: session.metadata.No_of_Tickets,
          Total_Cost: session.metadata.Total_Cost,
          Card_Number: session.metadata.Card_Number,
          Name_on_card: session.metadata.Name_on_card,
          User_ID: session.metadata.User_ID,
          Show_ID: session.metadata.Show_ID,
          Seat_ID: session.metadata.Seat_ID,
        };
        const ticketData={
          Ticket_ID:session.metadata.Ticket_ID,
          Booking_ID: session.metadata.Booking_ID,
          Price: session.metadata.Total_Cost,

        }

        const apiResponse = await fetch('http://localhost:8081/api/booking/addBooking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        });

        const data = await apiResponse.json();

        console.log(data);
        //ticket
        const apiResp = await fetch('http://localhost:8081/api/ticket/addTicket', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ticketData),
        });

        const data1 = await apiResp.json();

        console.log(data1);
      } catch (err) {
        console.log(`API call failed: ${err.message}`);
      }
      
  
      // Handle successful checkout
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  response.json({received: true});
}); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true);
    next();
})

app.use(cors({
    origin:`${process.env.CLIENT_PORT}`,
    credentials:true
}))
app.use(cookieParser())
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'public/Images')
    },
    filename:((req,file,cb)=>{
        cb(null,file.fieldname + "_"+Date.now()+path.extname(file.originalname))
    })
})


const upload= multer({
    storage:storage
})
app.post('/api/upload',upload.single('file'),(req,res)=>{
    const file = req.file;
    res.status(200).json(file.filename);
})

const authRoute=require('./routes/auth')
const theatreRoute=require('./routes/theatre')
const moviesRoute=require('./routes/movies')
const userRoute=require('./routes/user')
const screenRoute=require('./Routes/screen')
const showRoute=require('./routes/show')
const bookingRoute=require('./routes/booking')
const ticketRoute=require('./routes/ticket')
const seatRoute=require('./routes/seat')

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/movies",moviesRoute)
app.use("/api/theatre",theatreRoute)
app.use("/api/screen",screenRoute)
app.use("/api/show",showRoute)
app.use("/api/booking",bookingRoute)
app.use("/api/ticket",ticketRoute)
app.use("/api/seats",seatRoute)

//Stripe
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)



app.post("/payment", async (req, res) => {
    try {
      const { movieName, price, tickets,Booking_ID,User_ID,Show_ID,Seat_ID } = req.body; 
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [{
          price_data: {
            currency: "inr", 
            product_data: {
              name: movieName, 
            },
            unit_amount: price * 100, 
          },
          quantity: tickets, 
        }],
        success_url: `${process.env.SERVER_URL}`,
        cancel_url: `${process.env.SERVER_URL}/Order`,
        metadata: {
          movieName: movieName,
          Booking_ID: Booking_ID,
          No_of_Tickets: tickets,
          Total_Cost: price,
          Card_Number: 0,
          Name_on_card: "None",
          User_ID: User_ID,
          Show_ID: Show_ID,
          Seat_ID: Seat_ID,
          // Add any other data you want to include
        },
      })
      res.json({ url: session.url })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  })
  
 
app.listen(8081,()=>{
console.log("listening");
})

