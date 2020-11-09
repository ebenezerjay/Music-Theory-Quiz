import React from "react";
import NavUl from "./NavUl.js"

class Nav extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <nav className="flex">
        <NavUl/>
      </nav>
    )
  }
}

export default Nav;