import './App.css';
import React, { Component,useEffect,useState } from 'react'

const Data = localStorage()
function App() {
  const Date = new Date()
  const [result,setResult]  = useState(111)
  Data.add(22)
  console.log(Data)
  useEffect(()=>{
      
  },[result]) 
  return (
  <div className='mainPage'>
      <input placeholder='add date'/> 
      <input placeholder='add Number'/> 
  </div>
  );
}

export default App;
