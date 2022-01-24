import React, {useEffect, useState, useContext} from "react";
import {getData} from "../../api/api";
import {ICoffeeCardType} from "../../types/interfaces";
import {CoffeeCard} from "../CoffeeCard/CoffeeCard";

import './OurCoffee.css'

interface IOurCoffeeProps{
    sliceSize:number
}

export const OurCoffee: React.FC<IOurCoffeeProps> = (props) => {

    const [dates, setDates] = useState([] as Array<ICoffeeCardType>);

    const ourCoffeeBlock = (): void => {
        getData()
            .then(onDatesLoaded)
    }

    const onDatesLoaded = (results: any) => {
        setDates(results);
    }

    useEffect(ourCoffeeBlock, []);

    return (
        <div className="our-coffee">
            <div className={'container'}>
                {
                    //dates.map(data => <CoffeeCard key={data.id} {...data} />)

                    dates.slice(props.sliceSize, dates.length).map(data => <CoffeeCard key={data.id} {...data} />)
                }
            </div>
        </div>
    )
}