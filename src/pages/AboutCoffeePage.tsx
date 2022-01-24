import React from "react";
import {useSelector} from "react-redux";
import {CoffeeSingleInfo} from "../components/CoffeeSingleInfo/CoffeeSingleInfo";
import {Banner} from "../components/Banner/Banner";

const image = require("../images/coffee-shop.png")


export const AboutCoffeePage: React.FC = (props) => {

    // @ts-ignore
    const coffee = useSelector(state => state.coffeeitem.currentCoffeeItem);

    return (
        <div className={'inside-page'}>
            <Banner isFront={false} src={image} text={'Our coffee'} onlyTitle={true}/>
            <div className="coffeeitem-page">
                <CoffeeSingleInfo {...coffee} />
            </div>
        </div>
    )
}