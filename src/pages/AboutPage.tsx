import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {

    const navigate = useNavigate();

    return (
        <>
            <h3>About us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ab aliquid consequatur distinctio dolorem doloribus fuga hic
                nulla possimus recusandae, suscipit!</p>
            <button className="btn" onClick={() => navigate('/', { replace: true })}>Обратно к списку дел</button>
        </>

    )
}