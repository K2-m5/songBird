import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

function Header({ totalScore }) {
  return (
    <header className="header d-flex">
      <div className="logo" />
      <h1>SongBird</h1>
      <h2>
        Баллы:&nbsp;
        <span className="score">{totalScore}</span>
      </h2>
    </header>
  );
}

Header.propTypes = {
  totalScore: PropTypes.number.isRequired,
};

export default Header;
