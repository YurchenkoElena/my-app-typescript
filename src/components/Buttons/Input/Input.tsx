import React from "react";
import './Input.css'

interface IInputProps{
    type: string
    id: string
    placeholder: string
    label: string
}

export const Input: React.FC<IInputProps> = (props) => {

    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} placeholder={props.placeholder}/>
        </>
    )
}