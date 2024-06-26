import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
	count: number;
	next: string | null;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "1d1980b5967543b8852adecb2c77e47d",
	},
});

class APIClient<T> {
	constructor(public endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = async (config?: AxiosRequestConfig) => {
		const res = await axiosInstance.get<FetchResponse<T>>(this.endpoint, config);
		return res.data;
	};

	get = async (id: string | number) => {
		const res = await axiosInstance.get<T>(this.endpoint + "/" + id);
		return res.data;
	};
}

export default APIClient;
