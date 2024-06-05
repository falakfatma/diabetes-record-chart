import './App.css';
import React, { Component,useEffect,useState } from 'react'
import SugerBox from './Components/Suger'
// const Data = 
function App() {
  // ------CRUD -----
  // Create , Read, Update  , Delete
  const [storeArr,setstoreArr] = useState([Object.keys(localStorage)]) 
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
  function createFunction(params) {
    
  }
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
    value.push(Object.values(localStorage))
    for (let i = 0 ; i < localStorage.length; i++) {
        console.log(key[i] ,value[i] )
    }
  }
  
  return (
    <div className='mainPage'>
        <input className='inp_nav' onInput={setDateResultFunction} placeholder='Date-Month-Year' value={dateResult}/> 
        <input className='inp_nav' onInput={setNumberResultFunction} placeholder='Add Diabetes Number' value={diabetesNumberRecord}/> 
        <button className='btn' onClick={setResultInLocalStorage}>Click</button>   
        <button className='btn' onClick={showResultOfLocalStorage}>See Data</button>   
        <SugerBox dateVal={dateResult} diabetesRecord={diabetesNumberRecord}/>
        {
          storeArr.map((val)=>{
            <h1>
              value  : {val}
            </h1>
          })
        }
    </div>
  );
}

export default App;
