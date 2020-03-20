import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
    className="container result"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
    <div>
      You prefer <strong>{props.quizResult}</strong>!
    </div>
  </CSSTransitionGroup>
  );
}

export default Result;
