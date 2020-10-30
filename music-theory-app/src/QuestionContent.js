import React from "react";

class QuestionContent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <article className="flex">
        <h2 id="h2-lessonNum-id">Lesson #1</h2>
        <h3 id="h3-key-id">C major</h3>
      </article>
    )
  }
}

export default QuestionContent;