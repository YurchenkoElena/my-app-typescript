import React, { useState} from "react";
import {useDispatch} from "react-redux";
import {ICoffeeCardType} from "../../types/interfaces";
import {PElement} from "../PElement/PElement";
import {useNavigate} from "react-router-dom";
import {setCurrentCoffeeItem} from "../../redux/coffeeitem/coffeeitem";
import { Rating } from "../Rating/Rating";
import {ButtonCustom} from "../Buttons/Button/Button";
import {DescriptionModal} from "./DescriptionModal";


export const CoffeeCard: React.FC<ICoffeeCardType> = (props) => {

    const[modalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch();

    const { image, title, description, price, country } = props;

    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(setCurrentCoffeeItem(props))
        event.preventDefault()
        navigate(   `/coffee/${title}`, { replace: true })
    }

    const handleClickModal = () => {
        setModalOpen(true)
     }

    const handleClickModalClose = () => {
        setModalOpen(false)
    }


    const handleStop = (event: React.MouseEvent<HTMLElement>):void => {
        event.stopPropagation()
    }


    return (
            <div className="coffee-card-wrapper">
            <img src={image} alt={'coffee-card'}/>

            <div className="coffee-card-info">
                <PElement appointment='title'>{title}</PElement>
                <Rating handleStop={handleStop}/>
                <PElement appointment='price'>Country: {country}</PElement>
                <PElement appointment='price'>{price} $</PElement>
            </div>
                <div className={'item-footer'}>
                    <ButtonCustom onClick={handleClick} isTransparent={'white'}>See more</ButtonCustom>
                    <button onClick={handleClickModal}>See description</button>
                </div>
               <DescriptionModal description={description} isVisible ={modalOpen} controlModal={handleClickModalClose}/>
            </div>
    )
}