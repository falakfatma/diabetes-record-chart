import './App.css';
import React, { Component,useEffect,useState } from 'react'

// const Data = 
function App() {
  // const Date = new Date()
  const [dateResult,setDateResult]  = useState(11)
  const [diabetesNumberRecord,setDiabetesNumberRecord]  = useState(101)
  localStorage.setItem("value",dateResult)
  // console.log(Data)
  // useEffect(()=>{
      function setDateResultFunction(e) {
        setDateResult(e.target.value)
      }
      function setResultInLocalStorage(params) {
        localStorage.setItem(dateResult,diabetesNumberRecord)
      }
  // },[dateResult]) 
  return (
    <div className='mainPage'>
        <input className='inp_nav' onInput={setDateResultFunction} placeholder='Date-Month-Year'/> 
        <input className='inp_nav' placeholder='Add Diabetes Number'/> 
        <button onClick={setResultInLocalStorage}>Click</button>
        <div className='box'>
          <p>
          Date : {dateResult}
          </p> 
          <p>
            Number Result : {/* {numberResult}   */}
          </p> 
        </div> 
    </div>
  );
}

export default App;
