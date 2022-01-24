import React, {useEffect, useState, ChangeEvent} from "react";
import {getData} from "../../api/api";
import {ICoffeeCardType} from "../../types/interfaces";
import {CoffeeCard} from "../CoffeeCard/CoffeeCard";

import './OurCoffee.css'
import {Inputs} from "../Buttons/Input/Input";

interface IOurCoffeeProps {
    sliceSize: number,
    needSearch: boolean
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

    const [value, setValue] = useState('')

    const handleChange = (event: ChangeEvent<{ value: string }>) => {
        setValue(event.target.value);
        console.log(event)
    }

    const filteredCofee = dates.filter(coffee => {
        return coffee.title.toLowerCase().includes(value.toLowerCase())
    })


    return (
        <div className="our-coffee">
            {props.needSearch &&
                <>
                    <div className={'filters container'}>
                        <form>
                            <div className={'search'}>
                                <Inputs placeholder={'Start typing here...'}
                                        type={'text'} id={'search'}
                                        name={'search'}
                                        label={'Looking for...'}
                                        onChange={handleChange}
                                />
                            </div>
                            {/*    <div className={'radios'}>
                        <input type="radio" value="Brazil" name="Brazil"/> Brazil
                        <input type="radio" value="Columbia" name="Columbia"/> Columbia
                        <input type="radio" value="Brazil" name="Brazil"/> Brazil
                    </div>*/}
                        </form>
                    </div>
                    <div className={'container'}>
                        {
                            //dates.map(data => <CoffeeCard key={data.id} {...data} />)
                            filteredCofee.map(data => <CoffeeCard key={data.id} {...data} />)
                        }
                    </div>
                </>
            }

            <div className={'container'}>
                {
                    //dates.map(data => <CoffeeCard key={data.id} {...data} />)
                    dates.slice(props.sliceSize, dates.length).map(data => <CoffeeCard key={data.id} {...data} />)
                }
            </div>

        </div>
    )
}