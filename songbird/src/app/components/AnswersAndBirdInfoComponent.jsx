import React from 'react';
import PropTypes from 'prop-types';

import Answers from '../containers/AnswersContainer';
import BirdInfo from './BirdInfoComponent';

function AnswersAndBirdInfo(props) {
  const {
    currentBirds, handleClickAnswer, currentBird, correctBird, answersStatus,
  } = props;
  return (
    <div className="answersDescription row">
      <div className="col-md">
        <Answers
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
  );
}

AnswersAndBirdInfo.propTypes = {
  currentBirds: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClickAnswer: PropTypes.func.isRequired,
  currentBird: PropTypes.number,
  correctBird: PropTypes.number.isRequired,
  answersStatus: PropTypes.arrayOf(PropTypes.string).isRequired,
};

AnswersAndBirdInfo.defaultProps = {
  currentBird: null,
};

export default AnswersAndBirdInfo;
