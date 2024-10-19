import React from 'react';

import styles from './styles.module.css';

interface IResultDescriptionProps {
    searchText: string;
    totalResults: number;
}

export const ResultDescription: React.FC<IResultDescriptionProps> = ({ searchText, totalResults }) => {
    return (
        <div className={styles.resultDescription}>
            <p className={styles.searchText}>
                You searched for: <span>{searchText}</span>
            </p>
            <div className={styles.resultsBadge}>
                {totalResults} results
            </div>
        </div>
    );
};