import React from "react";
import './Title.css'
import {Colors, SizesTitle} from "../../enums/enum";

interface ITitleProps {
    size: SizesTitle.fifty | SizesTitle.thirty
    mainPage: boolean
    color: Colors.white | Colors.black
    title: string
}

export const Title: React.FC<ITitleProps> = (props) => {
    return (
        <div className={'title'}>
            {props.mainPage ?
                <h1 className={`title-${props.color} title-${props.size}`}>{props.title}</h1>
                :
                <h3 className={`title-${props.color} title-${props.size}`}>{props.title}</h3>}
        </div>
    )
};

