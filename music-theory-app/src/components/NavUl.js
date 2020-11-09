import React from "react";

class NavUl extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <ul className="flex">
        <label htmlFor="key-label">Pick A Key:</label>
        <select name="key-label">
          <option value=""></option>
          <option value="C#">C#</option>
          <option value="D">D</option>
          <option value="D">D#</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="F#">F#</option>
          <option value="G">G</option>
          <option value="G#">G#</option>
          <option value="A">A</option>
          <option value="A#">A#</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <li>Circle of 5ths</li>
      </ul>
    )
  }
}

export default NavUl;