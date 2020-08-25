import React from 'react';
import PropTypes from 'prop-types';

function NextRoundButton(props) {
  const { nextRound, isCorrectAnswer } = props;
  const buttonClass = isCorrectAnswer ? 'nextButton btn btn-primary' : 'nextButton btn btn-primary disabled';
  return (
    <button onClick={() => nextRound()} type="button" className={buttonClass}>Следующий вопрос</button>
  );
}

NextRoundButton.propTypes = {
  nextRound: PropTypes.func.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
};

export default NextRoundButton;
