import React from 'react'
import { Header } from '../../components/header/header';
import { usePoke } from '../../hooks/usePoke';

interface PokeListType {
    id: number;
    name: string;
    sprites: {
        front_default: string;
        front_shiny: string;
        back_shiny: string;
    }
}

export const Pokemon: React.FC = () => {
    const { data } = usePoke<PokeListType>("/pokemon/1/");

    if(!data) {
        return <p>Loading...</p>
    }

    console.log(data);
    return (
        <div>
            <Header />

            <ul>
                <li>{data?.name}</li>
                <img src={data?.sprites.front_default} alt="" />
                <img src={data?.sprites.back_shiny} alt="" />
                <img src={data?.sprites.front_shiny} alt="" />
            </ul>
            
        </div>
    )
}


