import React from "react"
import {PElement} from "../PElement/PElement"
import {CSSTransition} from 'react-transition-group'
import './Description.css'

type DescriptionModalType = {
    description: string
    isVisible: boolean
    controlModal: () => void
};


export const Description: React.FC<DescriptionModalType> = (props) => {

    return (
        <>
            <CSSTransition
                in={props.isVisible}
                timeout={3000}
                mountOnEnter
                unmountOnExit
                classNames="coffee-card-info-modal"
            >

                <div className="coffee-card-info-modal active">
                    <div className={'close-button'} onClick={props.controlModal}>
                        <img alt={'close'}
                             src="http://www.vitorazevedo.net/external_files/loading_small.png"/>
                    </div>
                    <PElement appointment='description'>{props.description}</PElement>
                </div>
            </CSSTransition>
        </>
    )
}