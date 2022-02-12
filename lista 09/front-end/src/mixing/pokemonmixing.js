import { AxiosInstance } from "axios";

export const imgURL = function(axios = AxiosInstance(), coverurl) {
    return `${axios.defaults.baseURL}${coverurl}`
} 