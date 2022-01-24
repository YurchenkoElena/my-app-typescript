import { createSlice} from "@reduxjs/toolkit";
import {ICoffeeCardType} from "../../types/interfaces";

type initialStateType = {
    currentCoffeeItem: ICoffeeCardType
}

const coffeeitemSlice = createSlice({
    name: 'coffeeitem',
    initialState: {
        currentCoffeeItem: { }
    } as initialStateType,
    reducers: {
        setCurrentCoffeeItem: (state: initialStateType, action) => {
            state.currentCoffeeItem = action.payload;
        }
    }
});

export const { setCurrentCoffeeItem } = coffeeitemSlice.actions;
export default coffeeitemSlice.reducer;