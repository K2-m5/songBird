import React from 'react';
import PropTypes from 'prop-types';

import Header from './HeaderComponent';
import RoundList from './RoundListComponent';

function QuizSongBird(props) {
  const {
    totalScore, roundNames, currentRound,
  } = props;

  return (
    <div className="container">
      <Header totalScore={totalScore} />
      <RoundList
        roundNames={roundNames}
        currentRound={currentRound}
      />
    </div>
  );
}

QuizSongBird.propTypes = {
  totalScore: PropTypes.number.isRequired,
  roundNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentRound: PropTypes.number.isRequired,
};

export default QuizSongBird;
