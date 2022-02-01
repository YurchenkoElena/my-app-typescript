import React from "react"
import ListDo from "../components/ListDo/ListDo"
import {Banner} from "../components/Banner/Banner"

const image = require("../images/coffee-shop.png")

export const TodosPage: React.FC = () => {

    return (
        <div className={'inside-page'}>
            <Banner isFront={false} src={image} text={'Our coffee'} onlyTitle={true}/>
            <div className="todos-page container">
                <ListDo />
            </div>
        </div>
    )
}