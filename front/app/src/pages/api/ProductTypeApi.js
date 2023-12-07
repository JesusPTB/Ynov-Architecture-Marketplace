// import {API_BASE_URL} from "../../../next.config";
import axios from "axios";

const productApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_GATEWAY + "ProductTypes",
    // baseURL: `${API_BASE_URL.local}ProductTypes`,
});

export const getFiveProducts = async () => {
    try {
        const response = await productApi.get('/MostUsed');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
