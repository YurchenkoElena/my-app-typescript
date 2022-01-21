import React from "react";
import {ICoffeeCardType} from "../../types/interfaces";


// @ts-ignore
export const CoffeeCard: React.FC<ICoffeeCardType> = ({data}) => {

    const { image, title, description, price } = data;
    return (
        <div className="coffee-card-wrapper">
            <img src={image}></img>
            <div className="coffee-card-info">
                <p>{title}</p>
                <p>{description}</p>
                <p>{price} $</p>
            </div>
        </div>
    )
}