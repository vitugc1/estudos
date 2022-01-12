import React from 'react';

import { Header } from '../../components/header/header'
import { useNasa } from '../../hooks/useNasa';

import "./nasa.scss";

const api_key = "Zra5uOfKsD1HittpolGJTC7Jb6P5CL37mFTgjRcH";

interface NasaListType {
    id: number;
    img_src: string;
}

export const Nasa: React.FC = () => {
    const { dataPhotos } = useNasa<NasaListType[]>(`/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${api_key}`);
    

    return (
        <div className="container-nasa">
            <Header />
            
            {dataPhotos?.map(item => (
                <div key={item.id}>
                    <img src={item.img_src} alt="" />
                </div>
            ))}
        </div>
    )
}





