import React from "react";
import './Title.css'

interface ITitleProps {
    size: Sizes.fifty | Sizes.thirty
    main: boolean
    color: string
    children: React.ReactNode
}

export enum Sizes {
    'fifty'='50',
    'thirty' = '30'
}

export const Title: React.FC<ITitleProps> = (props) => {
    return (
        <div className={'title'}>
            {props.main ?
                <h1 className={`title-${props.color} title-${props.size}`}>{props.children}</h1>
                :
                <h3 className={`title-${props.color} title-${props.size}`}>{props.children}</h3>}
        </div>
    )
};

