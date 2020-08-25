import React from 'react';
import PropTypes from 'prop-types';

function Answer(props) {
  const { currentBirds, handleClickAnswer, answersStatus } = props;

  const AnswersList = Object.values(currentBirds).map((item, index) => {
    const answerStatusClass = answersStatus === null ? 'answerStatus' : `answerStatus ${answersStatus[index]}`;
    return (
      <button key={item.id} type="button" onClick={() => handleClickAnswer(index)} className="list-group-item list-group-item-action">
        <span className={answerStatusClass} />
        {item.name}
      </button>
    );
  });

  return (
    <ul className="list-group answers">
      {AnswersList}
    </ul>
  );
}

Answer.propTypes = {
  currentBirds: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClickAnswer: PropTypes.func.isRequired,
  answersStatus: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Answer;
