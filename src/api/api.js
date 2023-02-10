import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getData = async(url) => {
    const {data} = await axios.get(`${BASE_URL}${url}`);
    return data;
}