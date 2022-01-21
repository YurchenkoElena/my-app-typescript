import React from 'react';
import {MenuLink} from "./MenuLink";
const iconBlack =  require("../../images/coffee.png")
const iconWhite =  require("../../images/cofee-white.png")

interface IMenuProps {
    color: string
}

export const Menu: React.FC<IMenuProps> = (props) => {
    return (
        <div className={'menu'}>
            <MenuLink linkHref={'/'} srcImage ={props.color === 'white' && iconWhite || props.color === 'black' && iconBlack} color={props.color}>Coffee house</MenuLink>
            <MenuLink linkHref={'/coffee'} color={props.color}>Coffee</MenuLink>
            <MenuLink color={props.color} linkHref={'/your-pleasure'}>For your pleasure</MenuLink>
        </div>
    )
}