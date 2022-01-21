
const url = 'http://localhost:3000/datas.json';

export const getData = async () => {

        let res = await fetch(`${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return res.json();

}
