import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function SearchMove(data, input = '') {
  const searcher = input.toLowerCase();

  const titleFilter = data.filter(move => {
    const prepereTitle = move.title.toLowerCase();
    const prepereDescription = move.description.toLowerCase();
    const movieContent = `${prepereTitle} ${prepereDescription}`;

    return movieContent.includes(searcher.trim());
  });

  return titleFilter;
}

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = SearchMove(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
