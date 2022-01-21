import React from "react";
import {ICoffeeCardType} from "../../types/interfaces";
import {PElement} from "../PElement/PElement";
import './CoffeeSingleInfo.css';

import aromisto from './../../images/cofee-image.jpg'
import {Text} from "../Text/Text";
import {Colors, SizesText} from "../../enums/enum";
import {IconImage} from "../IconsImage/IconImage";

export const CoffeeSingleInfo: React.FC<ICoffeeCardType> = (props) => {

    const {image, description, title, price, country} = props;

    return (
        <div className="coffee-single-info">
            <div className="image-wrapper">
                <img src={aromisto}></img>
            </div>
            <div className="coffee-card-info">
                <Text size={SizesText.big} color={Colors.black} text={"About it"}></Text>
                <IconImage color={'black'}/>
                <PElement appointment='description'><span>Country: </span> {country}</PElement>
                <PElement appointment='description'><span>Description: </span> {description}</PElement>
                <PElement appointment='price'><span>Price: </span> {price} $</PElement>
            </div>
        </div>
    )
}