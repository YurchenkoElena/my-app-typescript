import React from "react";
import {ICoffeeCardType} from "../../types/interfaces";
import {PElement} from "../PElement/PElement";

// @ts-ignore
export const CoffeeCard: React.FC<ICoffeeCardType> = ({data}) => {

    const { image, title, description, price } = data;
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