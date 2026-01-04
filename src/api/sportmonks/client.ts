import axios, {
    AxiosError,
    AxiosResponse,
    type AxiosRequestConfig,
} from 'axios';
import { httpError } from '../../utils/httpError';
import dotenv from 'dotenv';
dotenv.config();

export const sportmonksInstance = axios.create({
    baseURL: 'https://api.sportmonks.com/v3/football',
    method: 'GET',
    headers: {
        Authorization: `${process.env.SPORTMONKS_API_KEY}`,
    },
});

const FootballClient = async <T>(config: AxiosRequestConfig): Promise<T> => {
    try {
        const res: AxiosResponse<T> = await sportmonksInstance(config);
        return res.data;
    } catch (error) {
        const err = error as AxiosError<any>;

        if (err.response) {
            const status = err.response.status;

            throw httpError(
                status,
                err.response.data?.message || `Sportmonks API error (${status})`
            );
        }

        throw httpError(500, 'Neznámá chyba při volání Sportmonks API');
    }
};

export default FootballClient;
