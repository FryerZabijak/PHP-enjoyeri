import React from "react";
import Logo from "../img/php-enjoyeri-logo.svg"

export default function Footer() {
  return (
    <footer className="bg-php text-white p-8 mt-32">
      <div className="flex gap-12">
        <div>
            <img src={Logo} alt="PHP Enjoyeři Logo" style={{filter:"brightness(5)"}} width="200" />
        </div>
        <div className="flex flex-col">
            <h4 className="text-xl font-bold">Odkazy</h4>
            <a href="https://pepamraz.cz" target="_blank">Osobní Portfolio Autora</a>
            <a href="https://github.com/FryerZabijak" target="_blank">Github Autora</a>
            <a href="https://github.com/FryerZabijak/PHP-enjoyeri" target="_blank">Github Projektu</a>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
