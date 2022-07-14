import React, { useState } from 'react'
import './style.css'
import MonthList from './MonthList'


const Year=(props)=> {
  const years=['2020','2021','2022','2023','2024']
  const [selected_year,select_year]= useState("")
  const [count,update_count]=useState(0)
  const [mm,setmm]=useState('__')
  const [dd,setdd]=useState('__')
    return (
        <div className='main'>
        <div className='wrapper'>
          <div className='yearlist'>
             { 
               years.map((y)=>{
                 return(<div
                  className={y===selected_year? "year-selected":"year"}
                  onMouseEnter={()=>{
                    select_year(y);
                    update_count(1);
                    props.setyyyy(y);
                  }}>{y}</div>)
               })
              
             }
             </div> 
         <div className='rest' onMouseLeave={()=>{
           update_count(0)
           select_year("")
           props.setyyyy()}}>      
        <MonthList count={count}
         year={selected_year} 
         setmm={setmm}
         setdd={setdd}
         >
         </MonthList>
         {props.setmm(mm)}
         {props.setdd(dd)}
         {console.log(dd)}
        </div>
        </div>
        </div>
    )
  }
export default Year;
