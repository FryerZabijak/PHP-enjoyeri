import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFistRaised } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import PHPEnjoyeri_Meme from "../img/php-enjoyeri-meme.png";
import TipyTip from "./TipyTip";

export default function Tipy() {
  return (
    <div id="tipy">
      <h2 className="font-medium">Nezoufejte, pokud to jde těžce</h2>
      <h3 className="font-bold text-4xl">3 Tipy jak začít s PHP</h3>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div className="grid grid-cols-1 gap-12 pr-8">
          <TipyTip icon={<FontAwesomeIcon icon={faGamepad}/>} icon_color="var(--php)" heading="Programovat Hry" content="Programujte co chcete, ale hry jsou cool. Pak mi je pošlete."/>
          <TipyTip icon={<FontAwesomeIcon icon={faFistRaised}/>} icon_color="var(--php)" heading="Mlátit hlavou do stolu" content="Aby se tam ukotvily všechny informace, které jste se naučili."/>
          <TipyTip icon={<FontAwesomeIcon icon={faMoneyBill}/>} icon_color="var(--php)" heading="Myslet na peníze" content="Prachy se vydělávaj těžce, nemá je ten, kdo dělat nechce..."/>
        </div>
        <div className="grid place-items-center">
          <img src={PHPEnjoyeri_Meme} alt="PHP Enjoyeři Meme" />
        </div>
      </div>
    </div>
  );
}
