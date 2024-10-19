import React from 'react';

import imagePlaceholder from '../../../../assets/placeholder-image.png'

import styles from './styles.module.css';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: any;
  Type: string;
}

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
      <div className={styles.movieCard}>
          <div className={styles.movieCardImage}>
              <img
                  src={movie.Poster !== 'N/A' ? movie.Poster : imagePlaceholder}
                  alt={`Постер ${movie.Title}`}
                  className={movie.Poster === 'N/A' ? styles.placeholderImage : styles.movieCardImage}
              />
          </div>
          <div className={styles.movieCardDescription}>
              <p>Name: {movie.Title}</p>
              <p>Year: {movie.Year}</p>
              <p>imdbID: {movie.imdbID}</p>
              <p>Type: {movie.Type}</p>
          </div>
      </div>
  );
}
