import React from 'react';

import QuizSongBird from '../components/QuizSongBirdComponent';

class SongBird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0,
    };
  }

  render() {
    const {
      totalScore,
    } = this.state;

    return (
      <QuizSongBird
        totalScore={totalScore}
      />
    );
  }
}

export default SongBird;
