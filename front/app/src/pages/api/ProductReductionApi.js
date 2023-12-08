import axios from "axios";

const prodReductApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_GATEWAY + "ProductReductions",
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

export const getProdReductSwitchIsActivated = async (isActivated, pageNumber, pageSize) => {
    try {

        const response = await prodReductApi.get('/IsActivated', {
            params: {isActivated, pageNumber, pageSize },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching paginated products:', error);
        throw error;
    }
};
