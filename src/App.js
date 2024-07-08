import './App.css';
import React, { useState } from 'react';
import MovieList from './components/MovieList';

function App() {
  const [movies] = useState([]);

  return (
    <div className="App">
      {/* Main content */}
      <main className="p-4">
        <MovieList movies={movies} />
      </main>
    </div>
  );
}

export default App;
