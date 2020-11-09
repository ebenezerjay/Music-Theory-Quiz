import React from "react";
import ExplainerParagraph from "./ExplainerParagraph.js";
import ImgContainer from "./ImgContainer.js";
import QuizContainer from "./QuizContainer.js";
import quizCmajor from "./quizCmaj.js";


class QuestionContent extends React.Component {
  constructor() {
    super();
    this.state = {
      quiz: quizCmajor
    }
  }

  render() {
    const quizComponent = this.state.quiz.map(qNum => (<QuizContainer key={qNum.question} quizQuestion={qNum}/>));
    return (
      <article className="flex">
          <h2 className="flex" id="h2-lessonNum-id">Lesson #1</h2>
          <h3 className="flex" id="h3-key-id">C major</h3>
          <ExplainerParagraph/>
          <ImgContainer/>
          {quizComponent}
      </article>
    )
  }
}

export default QuestionContent;