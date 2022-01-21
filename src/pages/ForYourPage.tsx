import React from "react";
import {Banner} from "../components/Banner/Banner";
const image = require("../images/coffee-shop.png")


export const ForYourPage: React.FC = (props) => {

    return (
        <div className={'inside-page'}>
            <Banner isFront={false} src={image} onlyTitle={true} text={'For your pleasure'}/>
        </div>

    )
}