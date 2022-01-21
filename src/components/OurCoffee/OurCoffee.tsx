import React, {useEffect, useState} from "react";
import {getData} from "../../api/api";
import {ICoffeeCardType} from "../../types/interfaces";
import {CoffeeCard} from "../CoffeeCard/CoffeeCard";

import './OurCoffee.css'

export const OurCoffee: React.FC = () => {

    const [dates, setDates] = useState([] as Array<ICoffeeCardType>);

    const ourCoffeeBlock = (): void => {
        getData()
            .then(onDatesLoaded)
    }

    const onDatesLoaded = (results: any) => {
        setDates(results);
    }

    useEffect( ourCoffeeBlock, []);

    return (
        <div className="our-coffee">
            {
                // @ts-ignore
                dates.map(data => <CoffeeCard key={data.id} {...data} />)
            }

        </div>
    )
}