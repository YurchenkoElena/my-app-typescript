export interface ITodoType {
    title: string
    id: number
    completed: boolean
}

export interface ICoffeeCardType {
    id: number,
    title: string,
    price: string,
    description: string,
    country: string,
    image: string
}

export enum coffeeCardActionsTypes {
    FETCH_COFFEE_CARD = 'FETCH_COFFEE_CARD'
}

export interface FetchCoffeeCardsAction {
    type: coffeeCardActionsTypes.FETCH_COFFEE_CARD,
    payload: any
}

export type CoffeeCardAction = FetchCoffeeCardsAction