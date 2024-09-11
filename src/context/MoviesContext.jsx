import { createContext, useEffect, useState } from "react";
import { GET_MOVIES_NO_AUTH_URL } from "../config/url";
import { apiRequest } from "../service/apiRequest" 

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const url = GET_MOVIES_NO_AUTH_URL;
            const data = await apiRequest(url, 'GET', null, {});

            let moviesData = data;

            setMovies(moviesData);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const refreshMovies = async () => {
        await fetchMovies();
    };

    return (
        <MoviesContext.Provider value={{ movies, setMovies, refreshMovies }}>
            {children}
        </MoviesContext.Provider>
    );   
};