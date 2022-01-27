import React from "react"
import {PElement} from "../PElement/PElement"
import './DescriptionModal.css'

type DescriptionModalType = {
    description: string
    isVisible: boolean
    controlModal: () => void
};

export const DescriptionModal: React.FC<DescriptionModalType> = (props) => {

    return (
        <>
            {props.isVisible &&
                <div className="coffee-card-info-modal active">
                    <div className={'close-button'} onClick={props.controlModal}><img id="loading" src="http://www.vitorazevedo.net/external_files/loading_small.png"/></div>
                    <PElement appointment='description'>{props.description}</PElement>
                </div>}
        </>
    )
}