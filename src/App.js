import './App.css';
import React, { Component,useEffect,useState } from 'react'
import SugerBox from './Components/Suger'
// const Data = 
function App() {
  const [storeArr,setstoreArr] = useState([]) 
  const date = new Date()
  const dateInString = date.toLocaleDateString()
 // TIme 
  const key = []
  const value = []
  useEffect(()=>{

  })

 const hour = date.getHours()
 
  const [dateResult,setDateResult]  = useState(dateInString)
  const [diabetesNumberRecord,setDiabetesNumberRecord]  = useState('')
  //   // if(dateResult.length===0||diabetesNumberRecord){

  //   // }
  // })
  const setDateResultFunction = (e) => {
    setDateResult(e.target.value);
  }
  const setNumberResultFunction = (e) => {
    setDiabetesNumberRecord(e.target.value);
  }
  const setResultInLocalStorage = (params) => {
    
    if (dateResult.length > 0 && diabetesNumberRecord.length > 0) {
      localStorage.setItem(dateResult,diabetesNumberRecord)
    }else{
      console.log('fill data');
    }
  }
  const showResultOfLocalStorage =()=>{
    key.push(Object.keys(localStorage))
    value.push(Object.values(localStorage))
    for (let i = 0 ; i < localStorage.length; i++) {
      console.log(key[i], value[1]);
    }
  }
  
  return (
    <div className='mainPage'>
        <input className='inp_nav' onInput={setDateResultFunction} placeholder='Date-Month-Year' value={dateResult}/> 
        <input className='inp_nav' onInput={setNumberResultFunction} placeholder='Add Diabetes Number' value={diabetesNumberRecord}/> 
        <button className='btn' onClick={setResultInLocalStorage}>Click</button>   
        <button className='btn' onClick={showResultOfLocalStorage}>See Data</button>   
        <SugerBox dateVal={dateResult} diabetesRecord={diabetesNumberRecord}/>
    </div>
  );
}

export default App;
