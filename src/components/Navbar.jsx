import React, { useEffect } from "react";
import Logo from "../img/php-enjoyeri-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  let mobileMenuShow = false;

  function ToggleMobileMenu() {
    mobileMenuShow = !mobileMenuShow;
    const navbarLinks = document.querySelector(".mobile");

    if (mobileMenuShow) {
      console.log("show menu");
      navbarLinks.classList.add("mobile-menu-show");
      navbarLinks.classList.remove("mobile-menu-hide");
      navbarLinks.classList.remove("mobile-hidden");
    } else {
      console.log("hide menu");
      navbarLinks.classList.remove("mobile-menu-show");
      navbarLinks.classList.add("mobile-menu-hide");
    }
  }

  useEffect(() => {
    const menu = document.querySelector(".mobile-menu");
    menu.addEventListener("onclick",ToggleMobileMenu,true);
    const links = menu.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", ToggleMobileMenu);
    });


  }, []);

  return (
    <>
      <div className="mobile-hidden mobile mobile-menu mobile-menu-hide">
        <div className="bg-php text-white">
          <a id="close">
            <FontAwesomeIcon icon={faClose} />
          </a>
          <a href="/">
            <img src={Logo} style={{ height: 90, filter:"brightness(5)" }} />
          </a>
          <a href="#domu">Domů</a>
          <a href="#pocatek">Počátek</a>
          <a href="#vyhody">Výhody</a>
          <a href="#tipy">Tipy</a>
          <a href="#recenze">Recenze</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </div>

      <nav className="fixed w-full flex justify-center items-center gap-12 shadow-lg bg-white z-50 md:px-8">
        <div className="flex items-center justify-between w-full max-w-4xl">
          <a href="/">
            <img src={Logo} style={{ height: 90 }} />
          </a>
          <div className="md:hidden navbar-links flex gap-6 font-semibold text-php">
            <a href="#domu">Domů</a>
            <a href="#pocatek">Počátek</a>
            <a href="#vyhody">Výhody</a>
            <a href="#tipy">Tipy</a>
            <a href="#recenze">Recenze</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <div
            id="burger-menu"
            className="hidden md:inline md:p-4 space-y-2 bg-php rounded shadow cursor-pointer"
            onClick={ToggleMobileMenu}
          >
            <span className="block w-8 h-0.5 bg-gray-100" />
            <span className="block w-8 h-0.5 bg-gray-100" />
            <span className="block w-8 h-0.5 bg-gray-100" />
          </div>
        </div>
      </nav>
    </>
  );
}
