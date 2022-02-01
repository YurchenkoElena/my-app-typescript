import {CoffeeCardAction, coffeeCardActionsTypes} from "../../types/coffeCard/coffeCard";
import {ICoffeeCardType} from "../../types/coffeCard/coffeCard";

type initialStateType = {
    currentCoffeeItem: ICoffeeCardType
}

const initialState: initialStateType = {
    currentCoffeeItem: {}
} as initialStateType

console.log(initialState)

export const coffeeCardReducer = (state = initialState, action: CoffeeCardAction) => {
    switch (action.type) {
        case coffeeCardActionsTypes.FETCH_COFFEE_CARD:
            return state.currentCoffeeItem = action.payload;
        default:
            return state
    }
}