import React from 'react';

import { Header } from '../../components/header/header';
import { useSwFilmes } from '../../hooks/useSwFilmes';

export const Home: React.FC = () => {
    const { listFilmes } = useSwFilmes()

    console.log(listFilmes)

    return (
        <div>
            <Header />
            {listFilmes.map(filme => (
                <div key={filme.id}>
                    <h1>{filme.title}</h1>
                    <h2>{filme.director}</h2>
                    <h3>{filme.episode_id}</h3>
                    <p>{filme.opening_crawl}</p>
                </div>
            ))}
        </div>
    )
}


