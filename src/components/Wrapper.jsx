import React from 'react'

export default function Wrapper(props) {
  return (
    <div className='max-w-4xl m-auto'>
        {props.children}
    </div>
  )
}
