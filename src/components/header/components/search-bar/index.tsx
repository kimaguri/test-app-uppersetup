import React from 'react';

import searchIcon from '../../../../assets/search-icon.svg';

import styles from './styles.module.css'

interface SearchBarProps {
    value: string;
    onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onSearch }) => {
  const handleSearch = (e: any) => {
        onSearch(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={value}
        onChange={handleSearch}
        placeholder="Поиск фильмов..."
        className={styles.input}
      />
      <img src={searchIcon} alt="Search" className={styles.icon} />
    </div>
  );
};