import React from "react";
import Decore from "../img/decore.svg";
import Hero_images from "../img/hero-images.png";

export default function Hero() {
  return (
    <>
      <img className="absolute -z-10 top-0 right-0 " src={Decore} />

      <div className="pt-28 grid grid-cols-2">
        <div className="hero-left">
          <h2 className="text-php font-medium text-xl">
            Nechte své kódy tančit a vaše weby zpívat!
          </h2>
          <h1 className="text-dark-php text-6xl font-bold">
            Učte se PHP a ovládněte internet!
          </h1>
          <p className="text-php">
            když chcete programovat jako boss, ale vaše šéfka vás nutí používat
            starou verzi Internet Exploreru.
          </p>
          <div className="mt-4">
            <button className="bg-php px-8 py-3 rounded-lg text-white">
              Zjistit více
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img src={Hero_images} />
        </div>
      </div>
    </>
  );
}
