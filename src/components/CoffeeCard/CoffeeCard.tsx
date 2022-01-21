import React from "react";
import {useDispatch} from "react-redux";
import {ICoffeeCardType} from "../../types/interfaces";
import {PElement} from "../PElement/PElement";
import {generatePath, useNavigate} from "react-router-dom";
import {setCurrentCoffeeItem} from "../../redux/coffeeitem/coffeeitem";

export const CoffeeCard: React.FC<ICoffeeCardType> = (props) => {
    const dispatch = useDispatch();
    const { id, image, title, description, price } = props;

    const navigate = useNavigate();

    const handleClick = (event: any) => {
        dispatch(setCurrentCoffeeItem(props))
        event.preventDefault();
        navigate(   `/coffee/${title}`, { replace: true });
        //navigate(generatePath('/coffee/:title}', { title }));
    }

    return (
<<<<<<< HEAD
        <div className="coffee-card-wrapper" onClick={handleClick}>
            <img src={image}></img>
=======
        <div className="coffee-card-wrapper">
            <img src={image} alt={'coffee-image'}/>
>>>>>>> 69a64cdfde4c51fc5b56ded006c14e7e688b7d80
            <div className="coffee-card-info">
                <PElement appointment='title'>{title}</PElement>
                <PElement appointment='description'>{description}</PElement>
                <PElement appointment='price'>{price} $</PElement>
            </div>
        </div>
    )
}