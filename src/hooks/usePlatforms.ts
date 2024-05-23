import { useQuery } from '@tanstack/react-query'
import fetchResponsePlatforms from '../data/platforms'
import apiClient from '../services/apiClient'
import { FetchResponse } from './useData'

export interface Platform {
    id: number
    name: string
    slug: string
}

const usePlatforms = () => {
    return useQuery({
        queryKey: ["platforms"],
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: fetchResponsePlatforms,
        queryFn: async () => {
            const res = await apiClient.get<FetchResponse<Platform>>("platforms/lists/parents")
            return res.data
        }
    })
}

export default usePlatforms;
