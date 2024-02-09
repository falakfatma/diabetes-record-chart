import './App.css';
import React, { Component,useEffect,useState } from 'react'

// const Data = 
function App() {
  // const Date = new Date()
  const [dateResult,setDateResult]  = useState(11)
  const [diabetesNumberRecord,setDiabetesNumberRecord]  = useState(101)
  // localStorage.setItem("value",dateResult)
  // console.log(Data)
  
  // useEffect(()=>{
  //   if (dateResult.length<0){
      
  //   }
  // }) 
  const setDateResultFunction = (e) => {
    setDateResult(e.target.value)
    // setDiabetesNumberRecord(e.target.value)
  }
  const setNumberResultFunction = (e) => {
    // setDateResult(e.target.value)
    setDiabetesNumberRecord(e.target.value)
  }
  const setResultInLocalStorage = (params) => {
    if (dateResult.length > 0 && diabetesNumberRecord.length > 0) {
      localStorage.setItem(dateResult,diabetesNumberRecord)
    }else{
      console.log('fill data');
    }
  }
  return (
    <div className='mainPage'>
        <input className='inp_nav' onInput={setDateResultFunction} placeholder='Date-Month-Year' value={dateResult}/> 
        <input className='inp_nav' onInput={setNumberResultFunction} placeholder='Add Diabetes Number' value={diabetesNumberRecord}/> 
        <button onClick={setResultInLocalStorage}>Click</button>
        <div className='box'>
          <p>
          Date : {dateResult}
          </p> 
          <p>
            Number Result : {diabetesNumberRecord}
          </p> 
        </div> 
    </div>
  );
}

export default App;
