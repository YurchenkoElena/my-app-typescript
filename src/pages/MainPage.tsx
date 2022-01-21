import React from "react";
import {Banner} from "../components/Banner/Banner";
import {BlockTitleAndText} from "../components/BlockTitleAndText/BlockTitleAndText";
const bannerScr =  require("../images/desk.png")
const text = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n' +
    'Afraid at highly months do things on at. Situation recommend objection do intention\n' +
    'so questions. As greatly removed calling pleased improve an. Last ask him cold feel\n' +
    'met spot shy want. Children me laughing we prospect answered followed. At it went\n' +
    'is song that held help face.\n' +
    '\n' +
    'Now residence dashwoods she excellent you. Shade being under his bed her, Much\n' +
    'read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant\n' +
    'horrible but confined day end marriage. Eagerness furniture set preserved far\n' +
    'recommend. Did even but nor are most gave hope. Secure active living depend son\n' +
    'repair day ladies now.'

export const MainPage: React.FC = () => {

    return (
        <div className={'front-page'}>
            <Banner src={bannerScr} isFront={true} onlyTitle={false} text={'Everything You Love About Coffee'}/>
            <BlockTitleAndText text={text} title = {'About Us'}/>
        </div>
    )
}