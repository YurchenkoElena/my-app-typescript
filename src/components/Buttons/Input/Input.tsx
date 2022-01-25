import React from "react"
import './Input.css'

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement> {
    id: string
    placeholder?: string
    label: string
    name: string
    type: string
    value: string
}

export const Inputs: React.FC<InputProps> = (props) => {
    return (
        <div className={'input-buttons'}>
            <label htmlFor={props.id}>{props.label}</label>
            <input onChange={props.onChange} name={props.name} type={props.type} id={props.id} placeholder={props.placeholder} value={props.value}/>
        </div>
    )
}
