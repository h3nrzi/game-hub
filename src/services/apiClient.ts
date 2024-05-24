import axios from "axios";

export interface FetchResponse<T> {
    count: number
    results: T[]
}

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1d1980b5967543b8852adecb2c77e47d'
    }
});

export default apiClient;
