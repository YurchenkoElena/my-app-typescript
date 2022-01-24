import React from "react";
import {Banner} from "../components/Banner/Banner";
import {BlockTitleAndText} from "../components/BlockTitleAndText/BlockTitleAndText";
import {OurCoffee} from "../components/OurCoffee/OurCoffee";
const image = require("../images/coffee-shop.png")
const blockImage = require("../images/coffee-cup.png")
const text = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n' +
    '\n' +
    'Afraid at highly months do things on at. Situation recommend objection do intention\n' +
    'so questions. \n' +
    'As greatly removed calling pleased improve an. Last ask him cold feel\n' +
    'met spot shy want. Children me laughing we prospect answered followed. At it went\n' +
    'is song that held help face.'

export const ForYourPage: React.FC = (props) => {

    return (
        <div className={'inside-page'}>
            <Banner isFront={false} src={image} onlyTitle={true} text={'For your pleasure'}/>
            <BlockTitleAndText text={text} title={'About our goods'} hasImage={true} srcImage={blockImage}/>
            <OurCoffee needSearch={false} sliceSize={0}/>
        </div>

    )
}