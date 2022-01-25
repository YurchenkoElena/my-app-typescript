import React from "react";
import {useDispatch} from "react-redux";
import {ICoffeeCardType} from "../../types/interfaces";
import {PElement} from "../PElement/PElement";
import {useNavigate} from "react-router-dom";
import {setCurrentCoffeeItem} from "../../redux/coffeeitem/coffeeitem";
import { Rating } from "../Rating/Rating";

export const CoffeeCard: React.FC<ICoffeeCardType> = (props) => {

    const dispatch = useDispatch();

    const { id, image, title, description, price, country } = props;

    const navigate = useNavigate();

    const handleClick = (event: any) => {
        dispatch(setCurrentCoffeeItem(props))
        event.preventDefault();
        navigate(   `/coffee/${title}`, { replace: true });
    }

    const handleStop = (event: any):void => {
        event.stopPropagation();
    }


    return (
            <div className="coffee-card-wrapper" onClick={handleClick}>
            <img src={image} alt={'image'}/>

            <div className="coffee-card-info">
                <PElement appointment='title'>{title}</PElement>
                <PElement appointment='description'>{description}</PElement>
                <Rating handleStop={handleStop}/>
                <PElement appointment='price'>Country: {country}</PElement>
                <PElement appointment='price'>{price} $</PElement>
            </div>
        </div>
    )
}