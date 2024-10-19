const apiKey = '8523cbb8';
const baseURL = 'https://www.omdbapi.com/';

interface IFetchMoviesProps {
    searchText: string;
    pageNumber: number;
}

export const fetchMovies = async ({ searchText = 'Batman', pageNumber }: IFetchMoviesProps) => {
    try {
        const response = await fetch(`${baseURL}?apikey=${apiKey}&s=${searchText}&page=${pageNumber}`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return { Search: [], totalResults: 0 };
    }
}
