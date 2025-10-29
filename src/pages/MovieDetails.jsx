import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MovieDetails() {
  const { id } = useParams(); // Movie IMDb ID from the URL
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  const API_URL = "https://www.omdbapi.com/?apikey=e3516517";

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`${API_URL}&i=${id}&plot=full`);
      const data = await res.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div className="text-center text-gray-500 mt-10">Loading...</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <button 
        onClick={() => navigate(-1)} 
        className="bg-purple-600 text-white px-3 py-2 rounded mb-4"
      >
        ← Back
      </button>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={movie.Poster} alt={movie.Title} className="w-full object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
          <p className="text-gray-600"><strong>Released:</strong> {movie.Released}</p>
          <p className="text-gray-600"><strong>Genre:</strong> {movie.Genre}</p>
          <p className="text-gray-600"><strong>Director:</strong> {movie.Director}</p>
          <p className="text-gray-600"><strong>Actors:</strong> {movie.Actors}</p>
          <p className="text-gray-700 mt-2"><strong>Plot:</strong> {movie.Plot}</p>
          <p className="text-yellow-500 mt-2"><strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
