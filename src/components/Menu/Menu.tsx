import React from 'react';
import {MenuLink} from "./MenuLink";
const icon =  require("../../images/coffee.png")

export const Menu: React.FC = (x) => {
    return (
        <div className={'menu'}>
            <MenuLink linkHref={'/coffee-house'} srcImage ={icon} >Coffee house</MenuLink>
            <MenuLink linkHref={'/coffee'}>Coffee</MenuLink>
            <MenuLink linkHref={'/your-pleasure'}>For your pleasure</MenuLink>
        </div>
    )
}