import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import hiddenBird from '../../../img/hiddenBird.jpg';

import 'react-h5-audio-player/lib/styles.css';
import './Question.scss';

function Question({
  currentBirds, correctBird, isCorrectAnswer, birdAudio,
}) {
  let birdImage = hiddenBird;
  let birdName = '***';

  if (isCorrectAnswer) {
    birdImage = currentBirds[correctBird].image;
    birdName = currentBirds[correctBird].name;
  }

  return (
    <div className="unknown-bird jumbotron rounded">
      <img src={birdImage} alt="" className="unknown-bird--image" />
      <div className="list-group">
        <div className="list-group-item unknown-bird--name">{birdName}</div>
        <div className="list-group-item">
          <AudioPlayer
            ref={birdAudio}
            src={currentBirds[correctBird].audio}
            autoPlayAfterSrcChange={false}
          />
        </div>
      </div>
    </div>
  );
}

Question.propTypes = {
  currentBirds: PropTypes.arrayOf(PropTypes.object).isRequired,
  correctBird: PropTypes.number.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
  birdAudio: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Question;
