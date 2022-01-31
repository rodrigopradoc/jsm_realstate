import axios from 'axios';

export const baseUrl='https://bayut.p.rapidapi.com'

export const fetchApi=async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '1dace30727msh508a597f710db9fp13acf4jsn4f1e4e7a01d8'
        }
    });
    return data;
}