import React from 'react'
import VyhodyCard from './VyhodyCard'
import ImgMoney from './../img/money.jpg'

export default function Vyhody() {
  return (
    <div>
        <h3>A teď to nejlepší</h3>
        <h2>Výhody PHP</h2>
        <div>
            <VyhodyCard img={ImgMoney} title="Peníze" description="Je statisticky potvrzeno, že PHP Developeři vidí nejvíc $ než jakýkoliv jiní developeři"/>
        </div>
    </div>
  )
}
