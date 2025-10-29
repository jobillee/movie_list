import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200">
      <Link to={`/movie/${movie.imdbID}`}>
        <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'} 
          alt={movie.Title} 
          className="w-full h-72 object-cover"
        />
      </Link>
      <div className="p-3">
        <h3 className="text-lg font-semibold">{movie.Title}</h3>
        <p className="text-gray-500 text-sm">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
