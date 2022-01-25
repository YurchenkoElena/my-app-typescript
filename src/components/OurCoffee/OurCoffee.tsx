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

    const uniqueItems = dates.filter((item, pos, self) => self.findIndex(v => v.country === item.country) === pos);
    const country:Array<string> = []
    uniqueItems.forEach(element => country.push(element.country));


    useEffect(ourCoffeeBlock, []);

    const [valueSearch, setValueSearch] = useState('')

    const [valueFilter, setvalueFilter] = useState('')

    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(event.target.value);
    }

    const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setvalueFilter(event.target.name);
    }

    const filteredCofee = dates.filter(coffee => {
        return coffee.title.toLowerCase().includes(valueSearch.toLowerCase())
    })

    const filteredCofee2 = dates.filter(coffee => {
        return coffee.country.toLowerCase().includes(valueFilter.toLowerCase())
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
                                        onChange={handleChangeSearch}
                                        value={valueSearch}
                                />
                            </div>
                            <div className={'radios'}>
                                {
                                    country.map(c => <Inputs id={c} name={c} type={'checkbox'} label={c} onChange={handleChangeFilter} key={c} value={valueFilter}/>)
                                }
                            </div>
                        </form>
                    </div>
                    <div className={'container'}>
                        {
                            filteredCofee.map(data => <CoffeeCard key={data.id} {...data} />)
                        }
                    </div>
                </>
            }

            {!props.needSearch && <div className={'container'}>
                {
                    dates.slice(props.sliceSize, dates.length).map(data => <CoffeeCard key={data.id} {...data} />)
                }
            </div>
            }

        </div>
    )
}