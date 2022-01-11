import React from 'react'
import { Header } from '../../components/header/header';
import { usePoke } from '../../hooks/usePoke';

export const Pokemon: React.FC = () => {
    const { pokeList } = usePoke();

    console.log(pokeList?.map(p => p.name));
    return (
        <div>
            <Header />
            {pokeList?.map(item =>(
                <ul 
                    key={item.id}
                >
                    <li>{item.name}</li>
                </ul>
                
            ))}
        </div>
    )
}


