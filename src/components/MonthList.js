import React, { useState } from 'react'
import './style.css'
import SelectDate from './SelectDate'

const MonthList=(props)=> {
  const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  const [selected_month,select_month]=useState("")
  const [monthid,update_monthid]=useState(-1)
  const [flag,update_flag]=useState(0)
  const [dd,setdd]=useState('__')
  
    if(props.count!==0){
      return (
       <div className='wrapper'>  
       <div className="monthList">  
       {
         months.map((m,index)=>{
           return(<div
           className={m===selected_month? "month-selected" : "month"}
           onMouseEnter={()=>{
             select_month(m)
             update_monthid(index+1)
             update_flag(1)
             props.setmm(index+1)
           }}>
             {m}
           </div>)
         })
       }
         
       </div>
       <div className='rest2' onMouseLeave={()=>{
         select_month("")
         update_monthid(-1)
         update_flag(0)
       }}>
          <SelectDate month={monthid} year={props.year} flag={flag} setdd={setdd}></SelectDate>
          {props.setdd(dd)}
       </div>
      </div>
      )
      }
  else
  {
      return(
          <div></div>
      )
  }
  }

export default MonthList