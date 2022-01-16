import React from 'react'

import { Header } from '../../components/header/header';
import { usePoke } from '../../hooks/usePoke';

interface PokeListType {
    name: string;
    url: string;
    sprites: {
        front_default: string;
        front_shiny: string;
        back_shiny: string;
    }
}



export const Pokemon: React.FC = () => {
    const { data } = usePoke<PokeListType>(`/pokemon/5/`);

    console.log(data);
    return (
        <div>
            <Header />

            <div>
                <h1>{data?.name}</h1>
                <img src={data?.sprites.front_default} alt="pokemon" />
                <img src={data?.sprites.front_shiny} alt="pokemon" />
                <img src={data?.sprites.back_shiny} alt="pokemon" />
            </div>
        </div>
    )
}


