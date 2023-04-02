const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'TdafeflLYwbuavPgghX50Yh8LIrXAOP90IYVTBn5';

export default async function fetcher (queryParams?: string) {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}${queryParams?.length ? queryParams : ''}`);
        const data = response.json();

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
};