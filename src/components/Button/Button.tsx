import React from "react";
import './Button.css'
import {useNavigate} from "react-router-dom";

interface IButtonProps {
    isTransparent: 'transparent' | 'white'
}

export const Button: React.FC<IButtonProps> = (props) => {

    const history = useNavigate()

    return (
        <button onClick={()=>{history('/your-pleasure')}} className={`button-${props.isTransparent}`}> {props.children}
        </button>
    )
}