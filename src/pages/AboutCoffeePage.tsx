import React from "react";
import {CoffeeSingleInfo} from "../components/CoffeeSingleInfo/CoffeeSingleInfo";
import {Banner} from "../components/Banner/Banner";
import {useTypedSelector} from "../hooks/useTypedSelector";

const image = require("../images/coffee-shop.png")


export const AboutCoffeePage: React.FC = (props) => {

     return (
        <div className={'inside-page'}>
            <Banner isFront={false} src={image} text={'Our coffee'} onlyTitle={true}/>
            <div className="coffeeitem-page">
                <CoffeeSingleInfo  />
            </div>
        </div>
    )
}