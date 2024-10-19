import React, { useState, useEffect } from 'react';

import {Header} from './components/header';
import {MovieList} from './components/movie-list';
import {Pagination} from './components/pagination';
import {fetchMovies} from "./utility";
import {ResultDescription} from "./components/result-description";

import './App.css';

const App: React.FC = () => {
  const [state, setState] = useState({
    movies: [],
    totalResults: 0,
    isLoading: true
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('Batman');

  const totalPages = Math.ceil(state.totalResults / state.movies.length);

  const handleSearch = (searchQuery: string) => {
    setSearchText(searchQuery);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchMovies({ searchText, pageNumber: currentPage }).then((data) => {
      setState({
        movies: data['Search'] || [],
        totalResults: data['totalResults'] || 0,
        isLoading: false
      });
      window.scrollTo(0, 0);
    });
  }, [searchText, currentPage]);

  return (
    <div className="App">
      <div className="content-container">
        <Header searchValue={searchText} onSearch={handleSearch} />
        <ResultDescription searchText={searchText} totalResults={state.totalResults} />
        <MovieList movies={state?.movies} isLoading={state.isLoading} />
        {state.movies.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default App;