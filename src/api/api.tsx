import {ICoffeeCardType} from "../types/interfaces";


export const getData = async () => {
    return await fetch('http://localhost:3002/datas.json')
}

// const returnData = (datas: Array<ICoffeeCardType>): Array<ICoffeeCardType> => {
//     return datas.map(data => {
//         return {
//             id: data.id,
//             title: data.title,
//             description: data.description,
//             price: data.price,
//             country: data.country,
//             image: data.image
//         }
//     })
// }