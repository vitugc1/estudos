import { useState, useEffect } from 'react';
import { listApis } from '../services/api';

type PokeListType = {
    id: string;
    name: string;
    url: string;
}

export const usePoke = () => {
    const [pokeList, setPokeList] = useState<PokeListType[]>();
    const { pokeApi } = listApis();

    useEffect(() => {
        pokeApi.get("/ability/65/").then(reponse => {
            setPokeList(reponse.data.results);
        });
    

    }, []);

    return {pokeList};
}



