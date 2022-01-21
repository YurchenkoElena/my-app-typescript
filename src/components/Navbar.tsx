import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FunctionComponent = () => {
    return(
        <nav>
            <div className="nav-wrapper orange lighten-2 px1">
                <a href="/" className="brand-logo">React + TS</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Список дел</NavLink></li>
                    <li><NavLink to="/about">Информация</NavLink></li>
                    <li><NavLink to="/settings">Настройки</NavLink></li>
                </ul>
            </div>
        </nav>
        )

}