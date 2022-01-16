import React from 'react'
import { useClima } from '../../hooks/useClima';

import { Header } from '../../components/header/header';

const api_key = "9e83e47445974a3879def8105dc3ae56";

export const Time: React.FC = () => {
    const { data } = useClima(`/weather?q=Brazil,br&appid=${api_key}`)

    console.log(data)
    return (
        <div>
            <Header />
        </div>
    )
}

