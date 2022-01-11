import { useState, useEffect } from "react"
import { listApis } from "../services/api";

type ListfilmesType = {
    id: string;
    title: string;
    director: string;
    episode_id: string;
    opening_crawl: string;
}

export const useSwFilmes = () => {
    const [listFilmes, setListFilmes] = useState<ListfilmesType[]>([]);

    const { swApi } = listApis()

    useEffect(() =>{
        swApi.get("/films/").then(response => {
            setListFilmes(response.data.results);
        });
        
    }, []);

    return { listFilmes };
}