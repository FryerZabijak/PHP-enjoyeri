import React from "react";
import Logo from "../img/php-enjoyeri-logo.svg";

export default function Navbar() {
  return (
    <nav className="fixed w-full flex justify-center items-center gap-12 shadow-lg bg-white">
      <div className="flex items-center justify-between w-full max-w-4xl">
        <a href="/">
          <img src={Logo} style={{ height: 90 }} />
        </a>
        <div className="navbar-links flex gap-6 font-semibold text-php">
          <a href="#domu">Domů</a>
          <a href="#pocatek">Počátek</a>
          <a href="#vyhody">Výhody</a>
          <a href="#tipy">Tipy</a>
          <a href="#recenze">Recenze</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </div>
    </nav>
  );
}
