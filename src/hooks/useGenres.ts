import { useQuery } from "@tanstack/react-query";
import fetchResponseGenres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
	return useQuery({
		queryKey: ["genres"],
		staleTime: ms("24h"),
		initialData: fetchResponseGenres,
		queryFn: apiClient.getAll,
	});
};

export default useGenres;
