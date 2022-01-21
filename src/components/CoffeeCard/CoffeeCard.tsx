import React from "react";
import {ICoffeeCardType} from "../../types/interfaces";
import {PElement} from "../PElement/PElement";

export const CoffeeCard: React.FC<ICoffeeCardType> = (props) => {

    const { image, title, description, price } = props;
    return (
        <div className="coffee-card-wrapper">
            <img src={image}></img>
            <div className="coffee-card-info">
                <PElement appointment='title'>{title}</PElement>
                <PElement appointment='description '>{description}</PElement>
                <PElement appointment='price'>{price} $</PElement>
            </div>
        </div>
    )
}