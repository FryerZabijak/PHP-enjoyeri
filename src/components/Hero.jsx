import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Decore from "../img/decore.svg";
import Hero_images from "../img/hero-images.png";

export default function Hero() {
  return (
    <>
      <img className="absolute -z-10 top-0 right-0" src={Decore} />

      <div
        id="domu"
        className="pt-48 sm:pt-32 md:px-8 grid grid-cols-2 md:flex md:flex-col-reverse md:text-center"
      >
        <div className="hero-left">
          <h2 className="text-dark-php font-medium text-xl">
            Nechte své kódy tančit a vaše weby zpívat!
          </h2>
          <h1 className="text-dark-php mt-4 text-6xl font-bold">
            Učte se PHP a ovládněte internet!
          </h1>
          <p className="text-php mt-4">
            když chcete programovat jako boss, ale vaše šéfka vás nutí používat
            starou verzi Internet Exploreru.
          </p>
          <div className="mt-4 flex gap-4 md:justify-center">
            <a href="#pocatek">
              <button className="bg-php px-8 py-3 rounded-lg text-white">
                Zjistit více
              </button>
            </a>
            <div>
              <button className="bg-php rounded-full h-10 w-10">
                <FontAwesomeIcon icon={faPlay} className="text-white" />
              </button>

              <label className="ml-2">Přehrát video</label>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img
            src={Hero_images}
            className="md:w-full md:px-32 sm:px-0 m-auto"
          />
        </div>
      </div>
    </>
  );
}
