import {Dispatch} from "redux";
import {CoffeeCardAction, coffeeCardActionsTypes} from "../../types/coffeCard/coffeCard";

const url = 'http://localhost:3000/datas.json';


export const fetchCards = (id:number) => {
    return async (dispatch: Dispatch<CoffeeCardAction>) => {
        try {
            let res = await fetch(`${url}`);
            const dataCard = res.json()
            dataCard.then(function(value) {
                return value.find((item: any) => item.id === id)
            }).then(function(value){
                dispatch({type: coffeeCardActionsTypes.FETCH_COFFEE_CARD, payload: value})
            } )

        } catch (e){
            throw new Error(`Could not fetch ${url}, status: 'Server Error'`);
        }
    }
}
