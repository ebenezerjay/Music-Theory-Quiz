import React from "react";

class QuizContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="flex question-answer-div"> 
        <p className="question-p">{}</p>
        <p className="answer-p">{}</p>
      </div>
    )
  }
}

export default QuizContainer;