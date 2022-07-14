import React, { useState } from 'react'
import './style.css'
const SelectDate=(props)=> {
    {var last=new Date(props.year,props.month,0).getDate()}
    {var prev_last=new Date(props.year,props.month-1,0).getDate()}
    {var first_day=new Date()
    first_day.setDate(1)
    first_day.setFullYear(props.year)
    first_day.setMonth(props.month-1)
    first_day=first_day.getDay()}

    {var last_day=new Date()
      last_day.setDate(1)
      last_day.setFullYear(props.year)
      last_day.setMonth(props.month)
      last_day=last_day.getDay()}
      let arr=[]
      let parr=[]
      let narr=[]
    {for(let i=prev_last-first_day+1;i<=prev_last;i++)
      { 
        parr.push(i)
      }}
    {for(let i=1;i<=last;i++)
      {
        arr.push(i)
      }}
    {for(let i=1;i<=7-last_day;i++)
      {
        narr.push(i)
      }}    
    
    if(props.flag>0){
      return(
        <div className='calout'>
          <div className='weekdays'>
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
          <div className='days'>
               {parr.map((k1)=>{
                 return(<div className='prev-date'>{k1}</div>)
               })}
               {arr.map((k1)=>{
                 return(
                   <div onMouseEnter={()=>{
                    props.setdd(k1) 
                   }
                  }>{k1}</div>
                 )
               })}
               {narr.map((k1)=>{
                 return(<div className='next-date'>{k1}</div>)
               })}
          </div>
        </div>
        
      )
    }
    else{
      return(
        <div></div>
      )
    }
  
}

export default SelectDate