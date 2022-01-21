import React, {ReactElement} from "react";
import {NavLink} from "react-router-dom";


interface ILinkProps {
    linkHref: string
    children: React.ReactNode
    srcImage?: string
}

export const MenuLink: React.FC<ILinkProps> = (props) => {
    return (
        <>
            {props.srcImage ?
                <><img alt={'icon'} src={props.srcImage}/>
                    <NavLink to={props.linkHref}>{props.children}</NavLink></> :
                <NavLink to={props.linkHref}>{props.children}</NavLink>
            }
        </>
    )
};