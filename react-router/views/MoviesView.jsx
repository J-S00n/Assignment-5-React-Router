import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./MoviesView.css";
import Genres from "../components/Genres.jsx";
import Footer from "../components/Footer.jsx";
import Feature from "../components/Feature.jsx";

function MoviesView() {
    const navigate = useNavigate();
    const location = useLocation();

    const genres = [
        { genre: "Action", id: 28 },
        { genre: "Adventure", id: 12 },
        { genre: "Animation", id: 16 },
        { genre: "Comedy", id: 35 },
        { genre: "Crime", id: 80 },
        { genre: "Family", id: 10751 },
        { genre: "Fantasy", id: 14 },
        { genre: "History", id: 36 },
        { genre: "Mystery", id: 9648 },
        { genre: "Science Fiction", id: 878 },
        { genre: "Thriller", id: 53 },
        { genre: "War", id: 10752 },
        { gemre: "Westerm", id: 37 },
    ];

    return (
        <div className="movies-container">
            <div className="header">
                <h1>VibeVision</h1>
                <button onClick={() => navigate('/')} className="logout">Logout</button>
            </div>
            <div className="genres-and-movies">
                <div className="genres">
                    <Genres genresList={genres} />
                </div>
                <div className="movie-list">
                    {(location.pathname === "/movies" || location.pathname === "/movies/") && <Feature />}
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default MoviesView;