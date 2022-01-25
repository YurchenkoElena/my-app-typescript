import React from "react";
import {Inputs} from "../Buttons/Input/Input";

interface ICountryProps {
    country: Array<string>
    handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
    valueSearch: string
    handleChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void
    valueFilter:string
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const SearchFilters: React.FC<ICountryProps> = (props) => {

    return (
        <form>
            <div className={'search'}>
                <Inputs placeholder={'Start typing here...'}
                        type={'text'} id={'search'}
                        name={'search'}
                        label={'Looking for...'}
                        onChange={props.handleChangeSearch}
                        value={props.valueSearch}
                />
            </div>
            <div className={'radios'}>
                {
                    props.country.map(c => <Inputs id={c} name={c} type={'checkbox'} label={c}
                                                   onChange={props.handleChangeFilter} key={c} value={props.valueFilter}/>)
                }

            </div>
            <button className={'clear-button'} onClick={props.onClick}>Clear Filters</button>
        </form>
    )
}
