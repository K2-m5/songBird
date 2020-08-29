import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import RoundList from '../RoundList/RoundList';
import Question from '../Question/Question';
import Answer from '../Answer/Answers';
import BirdInfo from '../BirdInfo/BirdInfo';
import NextRoundButton from '../NextRoundButton/NextRoundButton';
import birdsData from '../../birdsData';
import FinishGame from '../FinishGame/FinishGame';

function QuizSongBird(props) {
  const {
    totalScore, roundNames, currentRound, currentBird, correctBird,
    isCorrectAnswer, birdAudio, nextRound, answersStatus, handleClickAnswer, restartGame,
  } = props;
  const currentBirds = birdsData[currentRound];
  if (currentRound === 6) {
    return (
      <div className="container">
        <Header totalScore={totalScore} />
        <RoundList
          roundNames={roundNames}
          currentRound={currentRound}
        />
        <FinishGame
          totalScore={totalScore}
          roundNames={roundNames}
          currentRound={currentRound}
          restartGame={() => restartGame()}
        />
      </div>
    );
  }
  return (
    <div className="container">
      <Header totalScore={totalScore} />
      <RoundList
        roundNames={roundNames}
        currentRound={currentRound}
      />
      <Question
        currentBirds={currentBirds}
        correctBird={correctBird}
        isCorrectAnswer={isCorrectAnswer}
        birdAudio={birdAudio}
      />
      <div className="answersDescription row">
        <div className="col-md">
          <Answer
            currentBirds={currentBirds}
            handleClickAnswer={(i) => handleClickAnswer(i)}
            currentBird={currentBird}
            correctBird={correctBird}
            answersStatus={answersStatus}
          />
        </div>
        <div className="col-md">
          <BirdInfo
            currentBirds={currentBirds}
            currentBird={currentBird}
          />
        </div>
      </div>
      <NextRoundButton
        nextRound={() => nextRound()}
        isCorrectAnswer={isCorrectAnswer}
      />
    </div>
  );
}

QuizSongBird.propTypes = {
  totalScore: PropTypes.number.isRequired,
  roundNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentRound: PropTypes.number.isRequired,
  currentBird: PropTypes.number,
  correctBird: PropTypes.number.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
  nextRound: PropTypes.func.isRequired,
  answersStatus: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClickAnswer: PropTypes.func.isRequired,
  restartGame: PropTypes.func.isRequired,
  birdAudio: PropTypes.objectOf(PropTypes.string).isRequired,
};

QuizSongBird.defaultProps = {
  currentBird: null,
};

export default QuizSongBird;
