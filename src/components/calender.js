import React from 'react'
import Year from './Year.js'
import './style.css'
const Calender = () => {
    let vari = new Date().getFullYear();
    let list=[];
     return (
    <div>
        <div className='main'>
        {
            (()=>{
                for(let i=vari-2;i<vari+3;i++)
                {
                    list.push(i)
                }
            })()
        }
        {list.map(year=><Year val={year}></Year>)}
    
    </div>
    </div>
        
  )
}
export default Calender
