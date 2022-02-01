import React from "react";
import {Banner} from "../components/Banner/Banner";
import UserList from "../components/UserList/UserList";

const image = require("../images/coffee-shop.png")


export const UsersPage: React.FC = (props) => {

    return (
        <div className={'inside-page'}>
            <Banner isFront={false} src={image} text={'Our coffee'} onlyTitle={true}/>
            <div className="users-page container">
                <UserList/>
            </div>
        </div>
    )
}