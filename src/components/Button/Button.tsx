import React from "react";
import './Button.css'

interface IButtonProps {
    isTransparent: 'transparent' | 'white'
}

export const Button: React.FC<IButtonProps> = (props) => {

    return (
        <button className={`button-${props.isTransparent}`}> {props.children}
        </button>
    )
}