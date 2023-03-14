import React from "react";
import Logo from "../img/php-enjoyeri-logo.svg";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-12 bg-white rounded-b-lg shadow-xl">
      <a href="/">
        <img src={Logo} style={{ height: 90 }} />
      </a>
      <div className="navbar-links flex gap-6 font-semibold text-php">
        <a href="#domu">
          Domů
        </a>
        <a href="#pocatek">
          Počátek
        </a>
        <a href="#vyhody">
          Výhody
        </a>
        <a href="#tipy">
          Tipy
        </a>
        <a href="#recenze">
          Recenze
        </a>
        <a href="#kontakt">
          Kontakt
        </a>
      </div>
    </nav>
  );
}
