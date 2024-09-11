import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext"
import MovieCard from "../components/MovieCard";
import { Grid2 } from "@mui/material";

const Movies = () => {
    const { movies, setMovies } = useContext(MoviesContext);

    return (
        <Grid2 
            container spacing={3} 
            style={{ padding: '20px', minHeight: '100vh' }} 
            justifyContent="center" 
            alignItems="center"
        >
            { movies.map((movie) => (
                <MovieCard movie={movie}/>
            ))}
        </Grid2>
    );
}

export default Movies;