import React from 'react';

import {SearchBar} from './components/search-bar';
import logo from '../../assets/uppersetup_logo.png';
import userProfileIcon from '../../assets/user-profile-icon.svg';

import styles from './styles.module.css';

interface HeaderProps {
    searchValue: string;
    onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = React.memo(({ searchValue, onSearch }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="UpperSetup Logo" className={styles.logo} />
      </div>
      <SearchBar value={searchValue} onSearch={onSearch} />
      <div className={styles.userInfo}>
        <img src={userProfileIcon} alt="User Profile" className={styles.userIcon} />
        <span>Your Name</span>
      </div>
    </header>
  );
});

export default Header;