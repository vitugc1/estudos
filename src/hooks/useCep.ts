import { useState, useEffect } from "react";
import { listApis } from "../services/api";

type CepListType = {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

export const useCep = () => {
    const [cep, setCep] = useState<CepListType[]>();

    const { cepApi } = listApis()

    useEffect(() => {
        cepApi.get("/AM/Manaus/Edgar Quinet/json/ ").then(response => {
            setCep(response.data);
        });
    }, [])

    return { cep };
    
}
