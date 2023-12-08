import axios from "axios";

const productTypeApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_GATEWAY + "ProductTypes",
});

export const getFiveProducts = async () => {
    try {
        const response = await productTypeApi.get('/MostUsed');
        return response.data;
    } catch (error) {
        console.error('Error fetching datas:', error);
        throw error;
    }
};

export const getPaginatedProductTypes = async (pageNumber, pageSize) => {
    try {

        const response = await productTypeApi.get('/Paginated', {
            params: { pageNumber, pageSize },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching paginated products:', error);
        throw error;
    }
};
