import React from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {CoffeeSingleInfo} from "../components/CoffeeSingleInfo/CoffeeSingleInfo";


export const AboutCoffeePage: React.FC = (props) => {

    const coffee = useSelector(state => state.coffeeitem.currentCoffeeItem);

    return (
        <div className="coffeeitem-page">
            <CoffeeSingleInfo id={coffee.id} title={coffee.title} price={coffee.price} description={coffee.description} country={coffee.country} image={coffee.image} />
        </div>

    )
}