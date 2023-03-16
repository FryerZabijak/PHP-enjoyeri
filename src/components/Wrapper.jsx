import React from 'react'

export default function Wrapper(props) {
  return (
    <div id="wrapper" className='max-w-4xl m-auto flex flex-col gap-36'>
        {props.children}
    </div>
  )
}
