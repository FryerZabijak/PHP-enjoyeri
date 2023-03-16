import React from 'react'

export default function RecenzeComponent(props) {
  return (
    <div className='shadow-lg p-6 py-16 rounded-lg absolute flex flex-col justify-between bg-white min-h-[304px] rating-component'>
        <p>{props.content}</p>
        <div>
        <h4 className='font-bold mt-8'>{props.name}</h4>
        <label className='font-medium'>{props.profession}</label>
        </div>
    </div>
  )
}
