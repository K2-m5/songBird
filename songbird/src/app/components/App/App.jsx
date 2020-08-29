import React, { createRef } from 'react';

import QuizSongBird from '../QuizSongBird/QuizSongBird';
import getRandomNumber from '../../utils/utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      roundNames: ['Птицы Европы', 'Птицы Северной Америки', 'Птицы Африки', 'Птицы Антарктики', 'Птицы Азии', 'Птицы Южной Америки'],
      currentRound: 0,
      correctBird: getRandomNumber(),
      isCorrectAnswer: false,
      currentBird: null,
      answersStatus: Array(6).fill(null),
      currentPoints: 5,
    };
    this.birdAudio = createRef();
  }

  getAnswerStatus(answerType) {
    const { currentBird, answersStatus, isCorrectAnswer } = this.state;
    const newAnswersStatus = answersStatus.slice();
    if (!isCorrectAnswer) {
      newAnswersStatus[currentBird] = answerType;
    }
    return newAnswersStatus;
  }

  setBirdCard(birdNum) {
    this.setState(() => ({
      currentBird: birdNum,
    }));
  }

  restartGame() {
    this.setState(() => ({
      currentRound: 0,
      correctBird: getRandomNumber(),
      totalScore: 0,
      currentPoints: 5,
      currentBird: null,
    }));
  }

  correctAnswer() {
    const { isCorrectAnswer } = this.state;
    if (!isCorrectAnswer) {
      this.birdAudio.current.audio.current.pause();
      const correctAudio = new Audio('./audio/game-sounds/correct.mp3');
      correctAudio.play();
      const newAnswersStatus = this.getAnswerStatus('correct');

      this.setState((state) => ({
        isCorrectAnswer: true,
        totalScore: state.totalScore + state.currentPoints,
        answersStatus: newAnswersStatus,
      }));
    }
  }

  wrongAnswer() {
    const { currentBird, answersStatus, isCorrectAnswer } = this.state;
    if (answersStatus[currentBird] === null && !isCorrectAnswer) {
      const errorAudio = new Audio('./audio/game-sounds/error.mp3');
      errorAudio.play();
      const newAnswersStatus = this.getAnswerStatus('wrong');
      this.setState((state) => ({
        currentPoints: state.currentPoints - 1,
        answersStatus: newAnswersStatus,
      }));
    }
  }

  checkAnswer() {
    const { currentBird, correctBird } = this.state;
    if (currentBird === correctBird) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }
  }

  async handleClickAnswer(birdNum) {
    await this.setBirdCard(birdNum);
    await this.checkAnswer();
  }

  nextRound() {
    const { isCorrectAnswer } = this.state;
    if (isCorrectAnswer) {
      this.setState((state) => ({
        currentRound: state.currentRound + 1,
        correctBird: getRandomNumber(),
        currentBird: null,
        isCorrectAnswer: false,
        answersStatus: Array(6).fill(null),
        currentPoints: 5,
      }));
    }
  }

  render() {
    const {
      totalScore,
      roundNames,
      currentRound,
      correctBird,
      isCorrectAnswer,
      currentBird,
      answersStatus,
    } = this.state;

    return (
      <QuizSongBird
        totalScore={totalScore}
        roundNames={roundNames}
        currentRound={currentRound}
        correctBird={correctBird}
        isCorrectAnswer={isCorrectAnswer}
        currentBird={currentBird}
        birdAudio={this.birdAudio}
        answersStatus={answersStatus}
        handleClickAnswer={(i) => this.handleClickAnswer(i)}
        nextRound={() => this.nextRound()}
        restartGame={() => this.restartGame()}
      />
    );
  }
}
