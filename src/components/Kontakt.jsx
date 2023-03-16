import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { service, template, public_key } from "../../email";
import Loader from "../img/loader-computer.gif"

export default function Kontakt() {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
      HideForm();
      ShowLoader();


    emailjs.sendForm(service, template, form.current, public_key).then(
      (result) => {
        HideLoader();
        ClearForm();
        ShowSuccess();
      },
      (error) => {
        HideSuccess();
        ShowFail();
      }
    );
  };

  function HideForm(){
    document.getElementById("contact-form").style.display="none";
  }

  function ShowLoader(){
    document.getElementById("contact-loader").style.display="unset";
  }

  function HideLoader(){
    document.getElementById("contact-loader").style.display="none";
  }

  function ShowSuccess(){
    document.getElementById("contact-success").style.display="unset";
  }

  function HideSuccess(){
    document.getElementById("contact-success").style.display="none";
  }

  function ShowFail(){
    document.getElementById("contact-fail").style.display="unset";
  }

  function ClearForm(){
    const inputs = document.querySelectorAll(".input");

    inputs.forEach((el) => {
        el.value="";
    })
  }

  return (
    <div id="kontakt" className="bg-blue-50 p-8 rounded-lg">
      <div id="contact-form">
        <h3 className="text-center text-3xl font-medium ">
          Zaujala-li Vás stránka PHP Enjoyeři, můžete se nám ozvat pro více
          informací!
        </h3>
        <form
          className="grid place-items-center gap-4 mt-10"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            className="input border w-96 sm:w-72 p-2 rounded-lg"
            placeholder="Jméno"
            name="name"
            required
          />
          <input
            className="input border w-96 sm:w-72 p-2 rounded-lg"
            placeholder="E-mail"
            type="email"
            name="email"
            required
          />
          <textarea
            className="input border w-96 sm:w-72 p-2 rounded-lg h-72 resize-none"
            placeholder="Zpráva..."
            name="message"
            required
          ></textarea>
          <input
            type="submit"
            name="submit"
            className="bg-php text-white px-4 py-2 rounded-lg cursor-pointer  hover:bg-dark-php"
          />
        </form>
      </div>
      <div id="contact-loader" className="grid place-items-center" style={{display:"none"}} >
        <img src={Loader} alt="Načítání" />
        <p>Načítání...</p>
      </div>
      <div id="contact-success" style={{display:"none"}}>
        <p>E-mail byl odeslán, co nevidět Vám odpovíme!</p>
      </div>
      <div id="contact-fail" style={{display:"none"}}>
        <p>
          Nepodařilo se E-mail odeslat, prosím, kontaktujte vlastníka manuálně:
          <a href="mailto:programator@pepamraz.cz">programator@pepamraz.cz</a>
        </p>
      </div>
      
    </div>
  );
}
