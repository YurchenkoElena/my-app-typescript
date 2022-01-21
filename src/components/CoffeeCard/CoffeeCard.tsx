import React from "react";
import {ICoffeeCardType} from "../../types/interfaces";


export const CoffeeCard: React.FC<ICoffeeCardType> = ({id, title, price, description, country, image}) => {

    return (
        <div className="coffee-card-wrapper">
            <img src={image}></img>
            <div className="coffee-card-info">
                <p>{title}</p>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}