import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./DetailView.css";

function DetailView () {
    const param = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function getMovieDetails() {
            try {
                setMovie((await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${import.meta.env.VITE_TMDB_KEY}`)).data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        getMovieDetails();
    }, []);

    return (
        <div className="detail-view">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
        </div>
    );
}
export default DetailView;