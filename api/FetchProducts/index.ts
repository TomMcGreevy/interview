import axios, { AxiosResponse, AxiosError } from "axios";

export const FetchProducts = async (): Promise<any> => {
    const options = {
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_API_URL}/products`,
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error: any) {
        return error.toJSON();
    }
}