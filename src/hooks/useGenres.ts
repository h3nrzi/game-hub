import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";
import fetchResponseGenres from "../data/genres";

export interface Genre {
    id: number
    name: string
    image_background: string
}

const useGenres = () => {
    return useQuery({
        queryKey: ["genres"],
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: fetchResponseGenres,
        queryFn: async () => {
            const res = await apiClient.get<FetchResponse<Genre>>("/genres")
            return res.data
        }
    })
}

export default useGenres;
