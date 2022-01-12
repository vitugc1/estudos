import axios from 'axios';

export const listApis = () => {
    const swApi = axios.create({
        baseURL: 'https://swapi.dev/api/',
    });

    const cepApi = axios.create({
        baseURL: 'https://viacep.com.br/ws/',
    })

    const pokeApi = axios.create({
        baseURL: 'https://pokeapi.co/api/v2',
    })

    const nasaApi = axios.create({
        baseURL: 'https://api.nasa.gov/',
    })

    const weatherApi = axios.create({
        baseURL: '',
    })



    return {swApi, cepApi, pokeApi, nasaApi, weatherApi};
}
