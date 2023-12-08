import axios from "axios";


const productApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_GATEWAY + "Products",
});

export const getAllProducts = async () => {
    try {
        const response = await productApi.get('/');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getPaginatedProducts = async (pageNumber, pageSize) => {
    try {

        const response = await productApi.get('/Paginated', {
            params: { pageNumber, pageSize },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching paginated products:', error);
        throw error;
    }
};

export const getPaginatedByType = async (productTypeId, pageNumber, pageSize) => {
    try {

        const response = await productApi.get(`/ProdType/${productTypeId}`, {
            params: { pageNumber, pageSize },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getPaginatedByShop = async (shopId, pageNumber, pageSize) => {
    try {

        const response = await productApi.get(`/Shop/${shopId}`, {
            params: { pageNumber, pageSize },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getPaginatedByPrice = async (minValue, maxValue,  pageNumber, pageSize) => {
    try {

        const response = await productApi.get(`/Price`, {
            params: {minValue, maxValue,  pageNumber, pageSize },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProductById = async (productId) => {
    try {
        const response = await productApi.get(`/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with ID ${productId}:`, error);
        throw error;
    }
};
