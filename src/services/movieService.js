import { fetchMovies } from '../api/api';

export const getPopularMovies = async () => {
  try {
    const data = await fetchMovies('/movie/popular');
    return data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const getTopRatedMovies = async () => {
  try {
    const data = await fetchMovies('/movie/top_rated');
    return data.results;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    return [];
  }
};
