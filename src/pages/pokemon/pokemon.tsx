import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { Header } from '../../components/header/header';
import { usePoke } from '../../hooks/usePoke';
import { listApis } from '../../services/api';


interface PokeProps {
    name: string;
    url: string;
}

interface PokedexInfoProps {
    id: string;
    name: string;

}

export const Pokemon: React.FC = () => {
    const { data } = usePoke<PokeProps[]>(`/pokemon/`);
    const [pokemonInfo, setPokemonInfo] = useState<PokeProps | undefined>(undefined);
    const [selectedPokemonInfo, setSelectedPokemonInfo] = useState<any | undefined>(undefined);

    const { pokeApi } = listApis();

    const handlePokedexInfo = useCallback(() => {
        pokeApi.get(`/pokemon/${pokemonInfo?.name}`).then(response => setSelectedPokemonInfo(response.data));
    }, [pokemonInfo]);

    useEffect(() => {
        handlePokedexInfo();
    }, [handlePokedexInfo]);


    console.log(selectedPokemonInfo);

    
    return (
        <div>
            <Header />

            {data?.map((pokemon) => <button key={pokemon.name} onClick={() => setPokemonInfo(pokemon)}>{pokemon.name}</button>)}

            <h2>pokemon selecionado: {pokemonInfo?.name}</h2>

            {selectedPokemonInfo?.id}

        </div>
    )
}


