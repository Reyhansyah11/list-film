import React, { useState, useEffect } from 'react';
import MovieCard from '../components/movieCard';
import { getPopularMovies, getTopRatedMovies } from '../services/movieService';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [category] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMoviesByCategory = async (category, searchTerm) => {
    let fetchedMovies;
    if (category === 'popular') {
      fetchedMovies = await getPopularMovies();
    } else if (category === 'top-rated') {
      fetchedMovies = await getTopRatedMovies();
    }
    
    // Filter movies based on search term
    const filteredMovies = fetchedMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setMovies(filteredMovies);
  };

  useEffect(() => {
    fetchMoviesByCategory(category, searchTerm);
  }, [category, searchTerm]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div className="container mt-5 mx-auto px-4">
      <header className="text-black p-4 mb-10">
        <h1 className="text-3xl">Daftar Film</h1>
        <div className="flex items-center mt-4 justify-center"> {/* Menggunakan justify-center untuk memposisikan ke tengah */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchInputChange}
            placeholder="Cari film..."
            className="mr-2 p-2 bg-white border w-5/12 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
