import React from "react";
import './Button.css'

interface IButtonProps {
    isTransparent: 'transparent' | 'white'
    onClick? : (event: React.MouseEvent<HTMLButtonElement>) =>void
}

export const ButtonCustom: React.FC<IButtonProps> = (props) => {


    return (
        <button onClick={props.onClick} className={`button-${props.isTransparent}`}> {props.children}
        </button>
    )
}