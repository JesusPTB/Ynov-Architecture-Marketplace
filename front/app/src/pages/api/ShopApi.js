import axios from "axios";

const shopApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_GATEWAY + "Shops",
    // baseURL: `${API_BASE_URL.local}Shops`,
});

export const getFiveShops = async () => {
    try {
        const response = await shopApi.get('/MostUsed');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getPaginatedShops = async (pageNumber, pageSize) => {
    try {

        const response = await shopApi.get('/Paginated', {
            params: { pageNumber, pageSize },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching paginated products:', error);
        throw error;
    }
};
