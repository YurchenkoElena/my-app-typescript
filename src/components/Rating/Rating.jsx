import React from "react";
import { FaStar } from "./FaStar";
import './rating.css'


export const Rating = ({handleStop}) => {

    const [clicked, setClicked] = React.useState([false, false, false, false, false]);

    const handleStarClick = (e, index) => {
        e.preventDefault();
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            if (i <= index) clickStates[i] = true;
            else clickStates[i] = false;
        }
        setClicked(clickStates);
    };

    return(
        <div className="rating" onClick={(e) => handleStop(e)}>
            <div>
                {
                    clicked.map((click, index) => <FaStar key={index} handleStarClick={handleStarClick} index={index} classClick={click ? "clickedstar" : null}/>)
                }
            </div>
        </div>
    )
}