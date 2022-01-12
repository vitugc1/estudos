import useSWR from 'swr';
import { listApis } from './../services/api';

export function useNasa<Data>(url: string){
    const { nasaApi } = listApis();

    const { data, error } = useSWR<Data>(url, url => {
        const response = nasaApi.get(url).then(res => res.data.photos);

        return response;
    });

    const dataPhotos = data;

    return { dataPhotos, error };
}
    

