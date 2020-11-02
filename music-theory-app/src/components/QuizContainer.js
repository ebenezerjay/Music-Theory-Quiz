import React from "react";
// import quizCmajor from "./quizCmajor.js";

class QuizContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p className="question-p">{}</p>
        <p className="answer-p">{}</p>
      </div>
    )
  }
}

export default QuizContainer;