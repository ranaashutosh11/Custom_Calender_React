import React,{useState} from 'react'
import "./style.css"
import Year from './Year';

const Modal = () => {
  const [modal,setModal]=useState(false);
  const [dd,setdd]=useState('__')
  const [mm,setmm]=useState('__')
  const [yyyy,setyyyy]=useState('___')

  const toggleModal=()=>{
    setModal(!modal)
  }
  return(
    <div className='container'>
    <div
    onClick={toggleModal} 
    className='input-calender'>{dd} <b>/</b> {mm} <b>/</b> {yyyy}</div>
    {modal &&(
      <div className='modal'>
      <div className='overlay' onClick={toggleModal}>
        <div className='modal-content'>
          <Year setyyyy={setyyyy} setmm={setmm} setdd={setdd}/>
        </div>  
      </div>
      </div>
    )}
    </div>
  )
}
export default Modal
