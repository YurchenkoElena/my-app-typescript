import React, {useEffect, useRef, useState} from 'react';
import {MenuLink} from "./MenuLink";
import {OurCoffeePage} from "../../pages/OurCoffeePage";
const iconBlack =  require("../../images/coffee.png")
const iconWhite =  require("../../images/cofee-white.png")

interface IMenuProps {
    color: string
}

export const Menu: React.FC<IMenuProps> = (props) => {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10)
        })
    }, [])

    return (
        <div className= {scroll ? "menu scrolled" : "menu"}>
            <MenuLink linkHref={'/'} srcImage ={props.color === 'white' && iconWhite || props.color === 'black' && iconBlack} color={props.color}>Coffee house</MenuLink>
            <MenuLink linkHref={'/coffee'} color={props.color}>Our Coffee</MenuLink>
            <MenuLink color={props.color} linkHref={'/your-pleasure'}>For your pleasure</MenuLink>
        </div>
    )
}