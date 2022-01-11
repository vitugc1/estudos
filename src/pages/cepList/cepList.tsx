import React from 'react'

import { Header } from '../../components/header/header'
import { useCep } from '../../hooks/useCep'

export const CepList: React.FC = () => {
    const { cep } = useCep();
    
    return (
        <div>
            <Header />
            <div>
                {cep?.map(item => (
                    <ul
                        key={item.cep}
                    >
                        <li>{item.cep}</li>
                        <li>{item.logradouro}</li>
                        <li>{item.complemento}</li>
                        <li>{item.bairro}</li>
                        <li>{item.localidade}</li>
                        <li>{item.ibge}</li>
                        <li>{item.gia}</li>
                        <li>{item.ddd}</li>
                        <li>{item.siafi}</li>
                    </ul>
                ))}
            </div>
        </div>
    )
}


