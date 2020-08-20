import React from 'react';

import QuizSongBird from '../components/QuizSongBirdComponent';

class SongBird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
      roundNames: ['Птицы Европы', 'Птицы Северной Америки', 'Птицы Африки', 'Птицы Антарктики', 'Птицы Азии', 'Птицы Южной Америки'],
      currentRound: 0,
    };
  }

  render() {
    const {
      totalScore,
      roundNames,
      currentRound,
    } = this.state;

    return (
      <QuizSongBird
        totalScore={totalScore}
        roundNames={roundNames}
        currentRound={currentRound}
      />
    );
  }
}

export default SongBird;
