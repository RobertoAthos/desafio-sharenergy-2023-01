import React from 'react'
import './success.css'

export const SuccessMessage = (props: {title:string}) => {
  return (
    <div className='success-box'>
        <p>{props.title}</p>
    </div>
  )
}
