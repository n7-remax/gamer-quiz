import React from 'react';

import QuestionCount from '../QuestionCount/QuestionCount';
import Question from '../Question/Question';
import AnswerOption from '../AnswerOption/AnswerOption';

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
  
  return (
    <div className="quiz">
      <QuestionCount
        counter={props.questionId}
        total={props.questionTotal}
      />
      <Question content={props.question} />
      <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  );
}

export default Quiz;
