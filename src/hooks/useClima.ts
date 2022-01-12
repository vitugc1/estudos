import useSWR from 'swr';
import { listApis } from './../services/api';

export function useClima<Data>(url: string){
    const { weatherApi } = listApis();

    const { data, error } = useSWR<Data>(url, url => {
        const response = weatherApi.get(url).then(res => res.data);

        return response;
    });


    return { data, error };
}


