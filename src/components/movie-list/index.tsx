import React from 'react';

import {MovieCard} from './components/movie-card';
import {Shimmer} from "./components/shimmer";

import styles from './styles.module.css';

interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

interface IMovieListProps {
  movies: IMovie[];
  isLoading: boolean;
}

export const MovieList: React.FC<IMovieListProps> = ({ movies , isLoading}) => {
  if (isLoading) {
    return <Shimmer />
  }

  if (movies.length === 0) {
    return (
      <div className={styles.movieList}>
        <div className={styles.noResults}>
        <div style={{
          border: '2px solid #ccc',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          color: '#ff0000'
        }}>
          Результаты не найдены.
        </div>
      </div>
      </div>
      
    );
  }

  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};