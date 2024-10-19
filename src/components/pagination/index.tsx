import React from 'react';

import styles from './styles.module.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pageNumbers.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pageNumbers.push('...');
    }
  }

  return (
    <div className={styles.paginationWrapper}>
      <button 
        className={styles.arrowButton} 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pageNumbers.map((number, index) => (
        <button
          key={index}
          className={`${styles.pageButton} ${number === currentPage ? styles.active : ''}`}
          onClick={() => typeof number === 'number' && onPageChange(number)}
          disabled={typeof number !== 'number'}
        >
          {number}
        </button>
      ))}
      <button 
        className={styles.arrowButton} 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};
