import { useNavigate } from "react-router-dom";
import axios from "axios";

function Genres() {
const navigate = useNavigate();

    const category = [
        { id: 28, genre: "Action" },
        { id: 12, genre: "Adventure" },
        { id: 16, genre: "Animation" },
        { id: 80, genre: "Crime" },
        { id: 10751, genre: "Family" },
        { id: 14, genre: "Fantasy" },
        { id: 36, genre: "History" },
        { id: 27, genre: "Horror" },
        { id: 9648, genre: "Mystery" },
        { id: 878, genre: "Sci-Fi" },
        { id: 10752, genre: "War" },
        { id: 37, genre: "Western" },
    ];

    const handleGenreClick = (genreId) => {
        // e.preventDefault();
        navigate(`/genres/${genreId}`);
    }

    return (
        <div className="genres">
            <h2>Genres</h2>
            <div className="genre-list">
                {category.map((g) => (
                    <button
                        key={g.id}
                        className="genre"
                        onClick={() => handleGenreClick(g.id)}
                    >
                        <h3>{g.genre}</h3>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Genres;