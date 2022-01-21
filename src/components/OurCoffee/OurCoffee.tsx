import React, {useState} from "react";
import {getData} from "../../api/api";
import {ICoffeeCardType} from "../../types/interfaces";

export const OurCoffee: React.FC = () => {

    let initialState = {
        datas: [] as Array<ICoffeeCardType>
    }

    const [datas, setDatas] = useState(initialState);

    return (
        <>
            {
                console.log(getData().then())
            }
           {/*// {datas.map(data => console.log(data))}*/}
        </>
    )
}