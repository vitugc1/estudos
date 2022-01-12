import useSWR from 'swr';
import { listApis } from './../services/api';

export function usePoke<Data>(url: string){
    const { pokeApi } = listApis();

    const { data, error } = useSWR<Data>(url, url => {
        const response = pokeApi.get(url).then(res => res.data);

        return response;
    });

    return { data, error };
}





