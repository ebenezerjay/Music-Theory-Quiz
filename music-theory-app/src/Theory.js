import React from "react";
import Header from "./Header.js";
import MainContent from "./MainContent.js";
import Main from "./MainContent.js";

class Theory extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
    <div className="div-wrapper flex">
      <Header/>
      <MainContent/>
    </div>
    )
  }
}

export default Theory;