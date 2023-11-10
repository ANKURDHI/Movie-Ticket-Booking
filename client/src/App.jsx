import React, { useEffect,useState } from 'react'

function App() {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/users')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    },[])
  return (
    <div>
      
    </div>
  )
}

export default App
