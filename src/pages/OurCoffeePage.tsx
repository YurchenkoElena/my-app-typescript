import React, {useState} from "react";
import {OurCoffee} from "../components/OurCoffee/OurCoffee";
import {Banner} from "../components/Banner/Banner";
import {BlockTitleAndText} from "../components/BlockTitleAndText/BlockTitleAndText";
const imageMain = require("../images/coffee-shop.png")
const image = require("../images/girl.jpg")
const text = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n' +
    '\n' +
    'Afraid at highly months do things on at. Situation recommend objection do intention\n' +
    'so questions. \n' +
    'As greatly removed calling pleased improve an. Last ask him cold feel\n' +
    'met spot shy want. Children me laughing we prospect answered followed. At it went\n' +
    'is song that held help face.'

export const OurCoffeePage: React.FC = () => {


    return (
        <div className={'inside-page'}>
           <Banner src={imageMain} text={'Our Coffee'} onlyTitle={true} isFront={false}/>
            <BlockTitleAndText text={text} title={'About our beans'} hasImage={true} srcImage={image}/>
            <OurCoffee needSearch={true} sliceSize={0}/>
        </div>
    )
}