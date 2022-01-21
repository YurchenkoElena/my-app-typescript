import React from "react";
import './Text.css'
import {Colors, SizesText} from "../../enums/enum";

interface ITitleProps {
    size: SizesText.big | SizesText.normal
    color: Colors.white | Colors.black
    children: React.ReactNode
}

export const Text: React.FC<ITitleProps> = (props) => {
    return (
        <div className={'text'}>
            <p className={`text-${props.color} text-${props.size}`}>{props.children}</p>
        </div>
    )
};