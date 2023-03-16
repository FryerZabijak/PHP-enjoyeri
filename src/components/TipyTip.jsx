import React from 'react'

export default function TipyTip(props) {
  return (
    <div className="tip flex gap-3 md:flex-col">
        <div className='icon text-white text-4xl p-4 rounded-lg min-h-[72px] min-w-[77px] grid place-items-center' style={{backgroundColor:`${props.icon_color}`}}>
            {props.icon}
        </div>
        <div className='content'>
            <h4 className='font-bold'>{props.heading}</h4>
            <p>{props.content}</p>
        </div>
    </div>
  )
}
