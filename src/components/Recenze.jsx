import React from "react";
import RecenzeComponent from "./RecenzeComponent";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Recenze() {
  let ratingIndex = 0;
  let elements = document.querySelectorAll(".rating-component") || [];

  useEffect(() => {
    elements = document.querySelectorAll(".rating-component");
    let zIndex = elements.length;

    elements[ratingIndex].classList.add("rating-active");

    const dots = document.querySelector(".dots");

    elements.forEach((el) => {
      el.style.zIndex = zIndex--;

      const element=document.createElement("div");
      element.classList.add("dot");
      if(el.classList.contains("rating-active")){
        element.classList.add("dot-active");
      }

      dots.append(element);
    });
  }, []);

  return (
    <div
      id="recenze"
      className="grid gap-4"
      style={{ gridTemplateColumns: `3fr 7fr` }}
    >
      <div>
        <h2 className="font-medium">Recenze</h2>
        <h3 className="font-bold text-4xl">Co si o PHP myslí ostatní?</h3>
        <div className="dots flex justify-center gap-6 mt-10">
        </div>
        <div className="controls text-3xl bg-white flex justify-center mt-10 gap-8">
          <button
            onClick={RatingUp}
            className="up border-black border rounded-lg p-4 shadow-md hover:bg-php hover:text-white active:bg-slate-600"
            style={{ transition: "0.2s" }}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <button
            onClick={RatingDown}
            className="down border-black border rounded-lg p-4 shadow-md hover:bg-php hover:text-white active:bg-slate-600"
            style={{ transition: "0.2s" }}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <RecenzeComponent
          name="Random borec"
          profession="PHP Enjoyer"
          content="Jazyk, který je jako kdyby se snažil být těžko pochopitelný. Ale nebojte se, s trochou trpělivosti a kafe v krvi, můžete zvládnout cokoli."
        />
        <RecenzeComponent
          name="Random borec"
          profession="PHP Enjoyer"
          content="PHP? Ach, kde začít s tímto klenotem programování? Jestli hledáte jazyk, který dokáže vás i vaše webové stránky úplně zničit, pak PHP je tím pravým pro vás!"
        />
        <RecenzeComponent
          name="Random borec"
          profession="PHP Enjoyer"
          content="Ať už chcete nebo ne, PHP vám umožní vytvořit špatný kód, který se vám bude smát a bude vás pronásledovat i po mnoha letech. Ale když už ho používáte, nezapomeňte se ujistit, že vaše webové stránky budou mít vzhled a funkce, které odpovídají požadavkům z roku 1998."
        />
        <RecenzeComponent
          name="Random borec"
          profession="PHP Enjoyer"
          content='Začněme s jeho "čarovnými" funkcemi, které vám umožní bezpečně uložit hesla do databáze, a to jen s malou pravděpodobností, že je někdo krade. Nebo co takhle jeho přátelské chování vůči chybám, které prostě ignoruje a jde dál, jako by se nic nestalo?'
        />
      </div>
    </div>
  );

  function RatingUp() {
    elements = document.querySelectorAll(".rating-component");

    elements[ratingIndex].classList.remove("rating-active");
    elements[ratingIndex].classList.remove("anim-down");
    elements[ratingIndex].classList.remove("anim-up");

    ratingIndex -= 1;
    if (ratingIndex < 0) ratingIndex = elements.length - 1;

    changeRating("up");
  }

  function RatingDown() {
    elements = document.querySelectorAll(".rating-component");

    elements[ratingIndex].classList.remove("rating-active");
    elements[ratingIndex].classList.remove("anim-down");
    elements[ratingIndex].classList.remove("anim-up");

    ratingIndex += 1;
    if (ratingIndex >= elements.length) ratingIndex = 0;

    changeRating("down");
  }

  function changeRating(direction) {
    if (direction == "up") {
      elements[ratingIndex].classList.add("anim-up");
    } else {
      elements[ratingIndex].classList.add("anim-down");
    }
    elements[ratingIndex].classList.add("rating-active");


    colorDots();
  }

  function colorDots(){
    const dots = document.querySelectorAll(".dot");
    for(let i = 0;i<dots.length;i++){
        dots[i].classList.remove("dot-active");

        if(i==ratingIndex) dots[i].classList.add("dot-active");
    }
  }
}
