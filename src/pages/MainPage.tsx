import React from "react";
import {Title} from "../components/Title/Title";
import {Banner} from "../components/Banner/Banner";
const bannerScr =  require("../images/desk.png")


export const MainPage: React.FC = () => {

    return (
        <div className={'front-page'}>
            <Banner src={bannerScr} isFront={true}/>
        </div>

    )
}