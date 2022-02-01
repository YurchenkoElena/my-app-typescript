import React from "react";
import {ICoffeeCardType} from "../../types/coffeCard/coffeCard";
import {PElement} from "../PElement/PElement";
import './CoffeeSingleInfo.css';
import aromisto from './../../images/cofee-image.jpg'
import {Text} from "../Text/Text";
import {Colors, SizesText} from "../../enums/enum";
import {IconImage} from "../IconsImage/IconImage";
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";


export const CoffeeSingleInfo: React.FC= (props) => {

    const coffee = useTypedSelector(state => state.coffeeCard);

    const navigate = useNavigate();

    const {image, description, title, price, country} = coffee;

   /* const handleRedirect = () => {
        navigate(   `/coffee`, { replace: true });
    }*/

    return (
        <div className="coffee-single-info">
            <div className="image-wrapper">
                <img src={image} alt={'image'}/>
            </div>
            <div className="coffee-card-info">
                <Text size={SizesText.big} color={Colors.black} text={"About it"}/>
                <IconImage color={'black'}/>
                <h2>{title}</h2>
                <PElement appointment='description'><span>Country: </span> {country}</PElement>
                <PElement appointment='description'><span>Description: </span> {description}</PElement>
                <PElement appointment='price'><span>Price: </span> {price} $</PElement>
            </div>
        </div>
    )
}