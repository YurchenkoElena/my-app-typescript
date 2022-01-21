import {ICoffeeCardType} from "../types/interfaces";

const url = 'http://localhost:3000/datas.json';

export const getData = async () => {

        let res = await fetch(`${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return res.json();

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