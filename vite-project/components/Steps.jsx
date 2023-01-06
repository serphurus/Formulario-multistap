import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

import './steps.css'

import React from 'react'

const Steps = ({currentStep}) => {
  return (  
  <div className='steps'>
    <div className="step active">
        <AiOutlineUser />
        <p>Identificação</p>
    </div>
    <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avalição</p>
    </div>
    <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
    </div>
  </div>
  )
}

export default Steps