import React from "react";
import './Title.css'
import {Colors, SizesTitle} from "../../enums/enum";

interface ITitleProps {
    size: SizesTitle.fifty | SizesTitle.thirty
    mainPage: boolean
    color: Colors.white | Colors.black
    children: React.ReactNode
}


export const Title: React.FC<ITitleProps> = (props) => {
    return (
        <div className={'title'}>
            {props.mainPage ?
                <h1 className={`title-${props.color} title-${props.size}`}>{props.children}</h1>
                :
                <h3 className={`title-${props.color} title-${props.size}`}>{props.children}</h3>}
        </div>
    )
};

