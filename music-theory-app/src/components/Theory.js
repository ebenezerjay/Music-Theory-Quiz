import React from "react";
import MainContent from "./MainContent.js";
import Header from "./Header.js";

class Theory extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {

  //   }
  // }

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