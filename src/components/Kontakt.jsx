import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';
import emailjs from '@email-js/browser';
import {service,template,key} from "../../email";

export default function Kontakt() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(service, template, form.current, key)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div id='kontakt' className='bg-blue-50 p-8 rounded-lg' >
        <h3 className='text-center text-3xl font-medium '>Zaujala-li Vás stránka PHP Enjoyeři, můžete se nám ozvat pro více informací!</h3>
        <form className='grid place-items-center gap-4 mt-10' ref={form} onSubmit={sendEmail} method='post'>
            <input className='border w-96 p-2 rounded-lg' placeholder='Jméno' name='name' required/>
            <input className='border w-96 p-2 rounded-lg' placeholder='E-mail' type="email" name='email' required/>
            <textarea className='border w-96 p-2 rounded-lg h-72 resize-none' placeholder='Zpráva...' name='message' required>
            </textarea>
            <input type="submit" name='submit' className='bg-php text-white px-4 py-2 rounded-lg cursor-pointer  hover:bg-dark-php'/>
        </form>
    </div>
  )
}
