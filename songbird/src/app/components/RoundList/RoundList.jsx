import React from 'react';
import PropTypes from 'prop-types';

import './RoundList.scss';

function RoundList({ roundNames, currentRound }) {
  const Rounds = roundNames.map((name, index) => {
    const nameClass = index === currentRound ? 'page-item active' : 'page-item';
    return (
      <li key={name} className={nameClass}>
        <a className="page-link" href="/#">{name}</a>
      </li>
    );
  });

  return (
    <ul className="round-list">
      {Rounds}
    </ul>
  );
}

RoundList.propTypes = {
  currentRound: PropTypes.number.isRequired,
  roundNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RoundList;
