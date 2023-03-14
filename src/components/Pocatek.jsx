import React from "react";
import php_code from "../img/php-code.png";

export default function Pocatek() {
  return (
    <div id="pocatek" className="text-center mt-32">
      <h2 className="font-medium">Počátek</h2>
      <h3 className="font-bold text-4xl">Všechno to začíná pěti znaky</h3>
      <div className="grid grid-cols-2 mt-10">
        <div className="text-left">
            <h4 className="text-3xl font-semibold">Co to všechno znamená?</h4>
            <p className="mt-8 max-w-[360px]">
            No, opravdu velmi poutavý kód. Asi měl autor kouzelné koule, aby uhodl, že v poli zvířat bude právě jeden slon. To se však stává tak často, že by si každý programátor měl udělat poznámku, aby se na to připravil.
            </p>
        </div>
        <div>
            <img src={php_code}/>
        </div>
      </div>
    </div>
  );
}
