import React, { Component } from 'react'
import './style.css'
class SelectDate extends Component {
  render() {
    {var last=new Date(this.props.year,this.props.mon,0).getDate()}
    {var prev_last=new Date(this.props.year,this.props.mon-1,0).getDate()}
    {var first_day=new Date()
    first_day.setDate(1)
    first_day.setMonth(this.props.mon-1)
    first_day=first_day.getDay()}

    {var last_day=new Date()
      last_day.setDate(1)
      last_day.setMonth(this.props.mon)
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



    if(this.props.flag>0){
      return(
        <div className='calout'>
          <div className='weekdays'>
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className='days'>
               {parr.map(k1=><div className='prev-date'>{k1}</div>)}
               {arr.map(k1=><div >{k1}</div>)}
               {narr.map(k1=><div className='next-date'>{k1}</div>)}
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
}

export default SelectDate