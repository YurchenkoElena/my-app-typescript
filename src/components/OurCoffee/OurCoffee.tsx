import React, {useEffect, useState} from "react";
import {getData} from "../../api/api";
import {ICoffeeCardType} from "../../types/coffeCard/coffeCard";
import {CoffeeCard} from "../CoffeeCard/CoffeeCard";
import {SearchFilters} from "../SearchFilters/SearchFilters";

import './OurCoffee.css'

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

    const onDatesLoaded = (results: Array<ICoffeeCardType>) => {
        setDates(results);
    }

    useEffect(ourCoffeeBlock, []);

    const uniqueItems = dates.filter((item, pos, self) => self.findIndex(v => v.country === item.country) === pos);
    const country: Array<string> = []
    uniqueItems.forEach(element => country.push(element.country));

    const [valueSearch, setValueSearch] = useState('')
    const [valueFilter, setValueFilter] = useState('')

    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(event.target.value)
    }

    const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueFilter(event.target.value)
    }

    const filteredCofee = dates.filter(coffee => {
        return coffee.title.toLowerCase().includes(valueSearch.toLowerCase()) && coffee.country.toLowerCase().includes(valueFilter.toLowerCase())
    })

    const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setValueSearch('');
        setValueFilter('')
    }

    return (
        <div className="our-coffee">
            {props.needSearch &&
                <>
                    <div className={'filters container'}>

                        <SearchFilters country={country} valueSearch={valueSearch} valueFilter={valueFilter}
                                       handleChangeFilter={handleChangeFilter} handleChangeSearch={handleChangeSearch}
                                       onClick={handleOnClick}/>
                    </div>
                    <div className={'container'}>
                        {filteredCofee.length
                            ?
                            filteredCofee.map(data => <CoffeeCard key={data.id} {...data} />)
                            : <h3 className={'no-matches'}>No matches found!</h3>
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