import React from "react";
import './IconImage.css';

const coffeeIconWhite = require("../../images/cofee-white.png")
const coffeeIconBlack = require("../../images/cofeeBlack.png")

interface IColorProps {
    color: string
}

export const IconImage: React.FC<IColorProps> = (props) => {
    return (
        <div className={'icon-block icon-' + props.color}>
            {props.color === 'black' && <img alt={'icon'} src={coffeeIconBlack}/>}
            {props.color === 'white' && <img alt={'icon'} src={coffeeIconWhite}/>}
        </div>
    )
};