import { NavLink, Outlet } from "react-router-dom";
import "./MoviesView.css";
import Header from "../components/Header.jsx";
import Genres from "../components/Genres.jsx";
import Footer from "../components/Footer.jsx";

function MoviesView() {

    return (
        <div className="movies-container">
            <Header />
            <Genres />
            <nav className="movies-nav">
                <NavLink to="/movies/now_playing" className="nav-link">Now Playing</NavLink>
                <NavLink to="/movies/popular" className="nav-link">Popular</NavLink>
                <NavLink to="/movies/top_rated" className="nav-link">Top Rated</NavLink>
                <NavLink to="/movies/upcoming" className="nav-link">Upcoming</NavLink>
            </nav>
            <div className="movies-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
export default MoviesView;