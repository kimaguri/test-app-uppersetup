import React from 'react';

import styles from './styles.module.css';

export const Shimmer: React.FC = () => {
  return (
    <div className={styles.shimmerWrapper}>
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className={styles.shimmerItem}></div>
      ))}
    </div>
  );
};