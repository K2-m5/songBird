import React from 'react';
import PropTypes from 'prop-types';

import './NextRoundButton.scss';

function NextRoundButton({ nextRound, isCorrectAnswer }) {
  const buttonClass = isCorrectAnswer ? 'btn btn-primary next-round ' : 'btn btn-primary disabled next-round';
  return (
    <button onClick={() => nextRound()} type="button" className={buttonClass}>Следующий вопрос</button>
  );
}

NextRoundButton.propTypes = {
  nextRound: PropTypes.func.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
};

export default NextRoundButton;
