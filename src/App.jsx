import { useState } from 'react';
import left_arrow from "./assets/arrow-left-circle.svg";
import right_arrow from "./assets/arrow-right-circle.svg";

import './App.css'
const dayOfWeek=["SUN","MON","TUE","WED","THU","FRI","SAT"];
const months=["January","February","March",
"April","May","June","July","August","September"
,"October","November","Decemeber"];


function App() {
 const [selectedDate,setSelectedDate]=useState(new Date());

 const daysInMonth=()=>{
     const daysArray=[];
     const firstDay=new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1);
     const lastDay=new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,0)
     console.log(firstDay);
     console.log(lastDay);
     for(let i=0;i<firstDay.getDay();i++){
      daysArray.push(null);
     }
     for(let i=1;i<=lastDay.getDate();i++){
      daysArray.push(new Date(selectedDate.getFullYear(),
      selectedDate.getMonth(),i));
     }
     
     return daysArray;
 };
 daysInMonth();
 const isSameDay=(date1,date2)=>{
  return date1.getDate()===date2.getDate()&& date1.getMonth()===
  date2.getMonth()&& date1.getFullYear()===date2.getFullYear();
 }
  const handleChangeMonth=(e)=>{
     const newMonth=parseInt(e.target.value,10);
     setSelectedDate(new Date(selectedDate.getFullYear(),newMonth,1));
  }
  const handleChangeYear=(e)=>{
     const newYear=parseInt(e.target.value,10);
     setSelectedDate(new Date(newYear,selectedDate.getMonth(),1))
    //  console.log(e.target.value);
  }
  return (
    <>
    {/* 
       Date:
        new date()
          -display current date with time
        to get date
           -new Date().getDate()
             eg:16
        to get day
           -new Date().getDay()
             eg: 5- which means friday
                 0-sunday
        to get month
           -new Date().getMonth()
            eg: 0-januray

    */}

    <div className='calender'>
        <div className='header'>
           <button onClick={()=>{
             setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()-1,1))
           }}>
            <img src={left_arrow} alt="left" />
           </button>
           <select value={selectedDate.getMonth()} onChange={handleChangeMonth}>
             {
              months.map((month,index)=>{
                return <option key={index} value={index}>{month}</option>
              })
             }
           </select>
           <select  value={selectedDate.getFullYear()} onChange={handleChangeYear}>
              {
                Array.from({length:10},(_,i)=>selectedDate.getFullYear()-5+i).
                  map((year)=>{
                    return <option key={year} value={year}>{year}</option>
                  })
              }
           </select>
           <button onClick={()=>{
             setSelectedDate(new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,1))
           }}>
            <img src={right_arrow} alt="right" />
           </button>
        </div>
        <div className="daysOfWeek">
            {
              dayOfWeek.map((day)=>{
                return <div key={day}>{day}</div>
              })
            }
        </div>
        <div className='days'>
          {
            daysInMonth().map((day,index)=>{
              console.log(day);
              console.log(day?day.getDate():"empty");
              return <div key={index} className={day? (isSameDay(day,new Date()))?"day current":"day":"empty"}>{day ? day.getDate():""} </div>
            })
          }
        </div>
    </div>

    </>
  )
}

export default App
