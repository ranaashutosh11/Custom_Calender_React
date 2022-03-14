import React, { Component } from 'react'
import './style.css'
import SelectDate from './SelectDate'

class MonthList extends Component {
  constructor(props){
    super(props)

    this.state={
      flag:0,
      monthid:-1
    }
  }
 display2(valu)
 {
   this.setState({
     flag:1,
     monthid:valu
   })
 }
  render() {
    if(this.props.count=="1"){
      return (
       <div className='wrapper'>   
       <div className="monthList">
       <div className='months' onMouseEnter={()=>this.display2(1)}>January</div>
       <div className='months' onMouseEnter={()=>this.display2(2)}>February</div>
       <div className='months' onMouseEnter={()=>this.display2(3)}>March</div>
       <div className='months' onMouseEnter={()=>this.display2(4)}>April</div>
       <div className='months' onMouseEnter={()=>this.display2(5)}>May</div>
       <div className='months' onMouseEnter={()=>this.display2(6)}>June</div>
       <div className='months' onMouseEnter={()=>this.display2(7)}>July</div>
       <div className='months' onMouseEnter={()=>this.display2(8)}>August</div>
       <div className='months' onMouseEnter={()=>this.display2(9)}>September</div>
       <div className='months' onMouseEnter={()=>this.display2(10)}>October</div>
       <div className='months' onMouseEnter={()=>this.display2(11)}>November</div>
       <div className='months' onMouseEnter={()=>this.display2(12)}>December</div>
       {console.log(this.state.monthid)}  
       </div>
       <SelectDate mon={this.state.monthid} year={this.props.year} flag={this.state.flag}></SelectDate>
       </div>
      )
      }
  else
  {
      return(
          <div></div>
      )
  }
  }}

export default MonthList