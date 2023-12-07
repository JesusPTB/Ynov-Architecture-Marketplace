// import {API_BASE_URL} from "../../../next.config";
import axios from "axios";

const prodReductApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_GATEWAY + "ProductReductions",
    // baseURL: `${API_BASE_URL.local}ProductReductions`,
});

export const getFiveProdReductions = async () => {
    try {
        const response = await prodReductApi.get('/MostUsed');
        console.log(JSON.stringify(response.data) );
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
