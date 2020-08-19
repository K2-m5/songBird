import React from 'react';
import PropTypes from 'prop-types';

import Header from './HeaderComponent';

function QuizSongBird(props) {
  const {
    totalScore,
  } = props;

  return (
    <div className="container">
      <Header totalScore={totalScore} />
    </div>
  );
}

QuizSongBird.propTypes = {
  totalScore: PropTypes.number.isRequired,
};

export default QuizSongBird;
