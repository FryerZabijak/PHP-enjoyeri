import React from 'react'
import FacebookLogo from "../img/facebook-logo.png"

export default function Firmy() {
  return (
    <div className='grid place-items-center gap-6' id='firmy'>
        <h3 className='text-xl'>Firmy, které to s PHP někam dotáhly</h3>
        <a href='https://facebook.com' rel='noopener' target="_blank">
        <img src={FacebookLogo} alt="Facebook Logo" width={150} />
        </a>
    </div>
  )
}
