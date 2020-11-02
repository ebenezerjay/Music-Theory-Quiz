import React from "react";
import QuestionContent from "./QuestionContent.js";

class MainContent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className="flex">
        <QuestionContent/>
      </main>
    )
  }
}

export default MainContent;