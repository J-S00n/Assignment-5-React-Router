import axios from "axios";
import { useState, useEffect, useRef } from "react";

function Feature() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const page = useRef(1);
    const pages = useRef(0);

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const getMoreMovies = async (direction) => {
        const nextPage = page.current + direction;
        if (nextPage > 0 && nextPage <= pages.current) {
            setLoading(true);
            page.current = nextPage;
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/now_playing?page=${nextPage}&api_key=${import.meta.env.VITE_TMDB_KEY}`
                );
                const shuffledMovies = shuffleArray(response.data.results);
                setMovies(shuffledMovies);
                pages.current = response.data.total_pages;
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        const getMovies = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`);
                pages.current = response.data.total_pages;
                const shuffledMovies = shuffleArray(response.data.results);
                setMovies(Array.isArray(shuffledMovies) ? shuffledMovies : []);

            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, []);

    return (
        <div className="feature-container">
            <h1>Featured Movies</h1>
            <div className="movie-list">
                {movies.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    movies.slice(0, 4).map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <h1>{`${movie.title}`}</h1>
                            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.id}`} />
                        </div>
                    ))
                )}
                <div className="pagination">
                    <button className="previous-button" onClick={() => getMoreMovies(-1)} disabled={loading}>Previous</button>
                    <button className="next-button" onClick={() => getMoreMovies(1)} disabled={loading}>Next</button>
                </div>
                {loading && <p>Loading...</p>}
            </div>
        </div>
    );
}

export default Feature;