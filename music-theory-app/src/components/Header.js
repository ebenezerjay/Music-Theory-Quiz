import React from "react";
import Nav from "./Nav.js";


class Header extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <header className="flex">
        <h1>Memorize Key Signatures</h1>
        <Nav/>
      </header>
    )
  }

}


export default Header;