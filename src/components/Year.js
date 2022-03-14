import React, { Component } from 'react'
import './style.css'
import MonthList from './MonthList'


class Year extends Component {
  constructor(props){
    super(props)

    this.state={
      count:0
    }
  }
 display()
 {
   this.setState({
     count:1
   })
 }
 ndisplay()
 {  
    this.setState({
      count:this.state.count
    })
 }
render() {
    return (
        <div className='wrapper'>
        <button className='year' onMouseEnter={()=>this.display()} onMouseLeave={()=>this.ndisplay()}>{this.props.val}</button>
        <MonthList count={this.state.count} year={this.props.val}></MonthList>
        </div>
    )
  }
}
export default Year;
