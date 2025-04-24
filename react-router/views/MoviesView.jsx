import { NavLink, Outlet, useNavigate } from "react-router-dom";

function MoviesView() {
    const navigate = useNavigate();

    return (
        <div className="movies-view">
            <h1 className="movies-title">Movies</h1>
            <nav className="movies-nav">
                <NavLink to="/movies" className="nav-link">All Movies</NavLink>
                <NavLink to="/movies/genre" className="nav-link">Genre</NavLink>
                <NavLink to="/movies/detail/:id" className="nav-link">Detail</NavLink>
            </nav>
            <button onClick={() => navigate(-1)} className="back-button">Back</button>
            <Outlet />
        </div>
    );
}
export default MoviesView;