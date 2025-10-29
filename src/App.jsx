import { useState, useEffect } from "react";
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Footer from './components/Footer';


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e3516517"

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Avengers");

  const fetchMovies = async () => {
    const response = await fetch(`${API_URL}&s=${searchTerm}`)
    const data = await response.json();
    setMovies(data.Search || []);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-800">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={fetchMovies} />
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
