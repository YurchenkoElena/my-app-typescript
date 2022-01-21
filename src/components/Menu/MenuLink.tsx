import React from "react";
import {NavLink} from "react-router-dom";
import './MenuLink.css'

interface ILinkProps {
    linkHref: string
    children: React.ReactNode
    srcImage?: string
    color: string
}

export const MenuLink: React.FC<ILinkProps> = (props) => {
    return (
        <>
            {props.srcImage ?
                <><img alt={'icon'} src={props.srcImage}/>
                <NavLink className={'color-' + props.color} to={props.linkHref}>{props.children}</NavLink></>
                :
                <NavLink className={'color-' + props.color} to={props.linkHref}>{props.children}</NavLink>
            }
        </>
    )
};