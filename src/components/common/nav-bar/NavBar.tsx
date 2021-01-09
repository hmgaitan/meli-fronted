import React from 'react';
import SearchItem from '../search-item/SearchItem';

// Scss
import './NavBar.scss';

const NavBar = ({ inputSubmitHandler }: any) => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-brand">
        <div className="logo"></div>
      </div>
      <div className="search-input-container">
        <SearchItem inputSubmitHandler={inputSubmitHandler} />
      </div>
    </div>
  );
};

export default NavBar;
