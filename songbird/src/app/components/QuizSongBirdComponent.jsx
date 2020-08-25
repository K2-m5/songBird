import React from 'react';
import PropTypes from 'prop-types';

import Header from './HeaderComponent';
import RoundList from './RoundListComponent';
import Question from './QuestionComponent';
import AnswersAndBirdInfo from './AnswersAndBirdInfoComponent';
import NextRoundButton from './NextRoundButtonComponent';
import birdsData from '../birdsData';

function QuizSongBird(props) {
  const {
    totalScore, roundNames, currentRound, currentBird, correctBird,
    isCorrectAnswer, birdAudio, nextRound, answersStatus, handleClickAnswer,
  } = props;
  const currentBirds = birdsData[currentRound];
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
        randomBirdPlayer={birdAudio}
      />
      <AnswersAndBirdInfo
        currentBirds={currentBirds}
        currentBird={currentBird}
        handleClickAnswer={(i) => handleClickAnswer(i)}
        correctBird={correctBird}
        answersStatus={answersStatus}
      />
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
  birdAudio: PropTypes.objectOf(PropTypes.string).isRequired,
  nextRound: PropTypes.func.isRequired,
  answersStatus: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClickAnswer: PropTypes.func.isRequired,
};

QuizSongBird.defaultProps = {
  currentBird: null,
};

export default QuizSongBird;
