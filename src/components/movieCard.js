import React from 'react';

const BASE_IMG_URL = process.env.REACT_APP_BASEIMGURL;

const MovieCard = ({ movie }) => {
  // Format tanggal rilis film
  const releaseDate = new Date(movie.release_date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 filter hover:brightness-75">
      <img className="w-full" src={`${BASE_IMG_URL}${movie.poster_path}`} alt={movie.title} />
      <div className="px-6 py-2">
        <div className="font-bold text-sm mb-2 mt-2">{movie.title}</div>
        <div className="flex justify-between items-center">
          <span className="inline-block rounded-full py-1 text-xs mt-2 font-normal text-gray-700">
            {releaseDate}
          </span>
          <span className="inline-block rounded-full py-1 text-xs font-normal mt-2 text-gray-700">
            Rating: {movie.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
