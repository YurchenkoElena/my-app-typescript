import React from "react";
import { useNavigate } from "react-router-dom";
import {OurCoffee} from "../components/OurCoffee/OurCoffee";

export const AboutPage: React.FC = () => {

    const navigate = useNavigate();

    return (
        <>
            <h3>About us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ab aliquid consequatur distinctio dolorem doloribus fuga hic
                nulla possimus recusandae, suscipit!</p>
            <button className="btn" onClick={() => navigate('/todo-list', { replace: true })}>Back to Your todo list</button>
            <OurCoffee />
        </>

    )
}