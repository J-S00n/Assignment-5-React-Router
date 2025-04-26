import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./MoviesView.css";
import Header from "../components/Header.jsx";
import Genres from "../components/Genres.jsx";
import Footer from "../components/Footer.jsx";

function MoviesView() {

    const navigate = useNavigate();

    return (
        <div className="movies-container">
            <Header />
            <Genres />
            <div className="movies-nav">
                <button onClick={() => navigate('/movies/genre')} className="genre">Genre</button>
                <button onClick={() => navigate('/movies/details')} className="details">Details</button>
            </div>
            <Footer />
        </div>
    );
}
export default MoviesView;