import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GenreView.css";

function GenreView() {
    const location = useLocation().pathname.split("/")[2]; // Extract genre from URL
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${location}?api_key=${import.meta.env.VITE_TMDB_KEY}`);
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        getMovies();
    }, [location]);

    return (
        <div className="genre-view">
            <div className="movie-list">
                {movies && movies.map((movie) => (
                    <div key={movie.id} className="movie-card" onClick={() => navigate(`/movies/${movie.id}`)}>
                        <h1>{`${movie.title}`}</h1>
                        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.id}`} /> 
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GenreView;