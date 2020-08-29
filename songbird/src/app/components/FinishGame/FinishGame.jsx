import React from 'react';
import PropTypes from 'prop-types';

import './FinishGame.scss';

function FinishGame({ totalScore, restartGame }) {
  return (
    <div className="gameOver jumbotron">
      <h2 className="gameOver__congratulations">Поздравляем!</h2>
      <p className="gameOver__points">
        Вы прошли викторину и набрали
        {' '}
        {totalScore}
        {' '}
        из 30 возможных баллов.
      </p>
      <hr className="gameOver__line" />
      <button onClick={() => restartGame()} className="btn btn-primary gameOver__button" type="button">Попробовать ещё раз!</button>
    </div>
  );
}

FinishGame.propTypes = {
  totalScore: PropTypes.number.isRequired,
  restartGame: PropTypes.func.isRequired,
};

export default FinishGame;
