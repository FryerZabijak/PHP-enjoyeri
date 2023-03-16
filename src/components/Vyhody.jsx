import React from 'react'
import VyhodyCard from './VyhodyCard'
import ImgMoney from './../img/money.jpg'
import ImgWordpress from './../img/wordpress.jpg'
import ImgPHP from './../img/php.jpg'

export default function Vyhody() {
  return (
    <div>
        <h3>A teď to nejlepší</h3>
        <h2>Výhody PHP</h2>
        <div className='flex gap-8'>
            <VyhodyCard img={ImgMoney} title="Peníze" description="Je statisticky potvrzeno, že PHP Developeři vidí nejvíc $ než jakýkoliv jiní developeři"/>
            <VyhodyCard img={ImgWordpress} position='left' title="Jednoduchost" description="Není třeba nic řešit, Wordpress se o vše postará. Teda až na problémy jim způsobené."/>
            <VyhodyCard img={ImgPHP} position='center' title="Způsob" description="PHP není programovací jazyk.  PHP je životní styl."/>
        </div>
    </div>
  )
}
