import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./GenreView.css";


function GenreView() {
    // const location = useLocation().pathname.split("/")[2]; // Extract genre from URL
    const navigate = useNavigate();
    const params = useParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(0);


    useEffect(() => {
        setPage(1);
        const getGenre = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${params.id}&page=${page}`
                );
                setMovies(response.data.results);
                setMaxPage(response.data.total_pages);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        getGenre();
    }, [page, params.id]);

    function previousPage() {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    function nextPage() {
        if (page < maxPage) {
            setPage(page + 1);
        }
    }

    return (
        <div className="genre-view">
            <div className="movie-list">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <img className="movie-image" key={movie.id} height={"300px"} style={{ cursor: "pointer" }}
                            onClick={() => navigate(`/movies/detail/${movie.id}`)}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title} />
                    ))
                ) : (
                    <p>Loading content</p>
                )}
            </div>
            <div className="button-container">
                <button className="page-button" style={{ curosr: "pointer" }} onClick={() => previousPage()}>Previous Page</button>
                <button className="page-button" style={{ cursor: "pointer" }} onClick={() => nextPage()} >Next Page</button>
            </div>
            <p id="page-count">Page: {page}/{maxPage}</p>
        </div>
    );
}


export default GenreView;