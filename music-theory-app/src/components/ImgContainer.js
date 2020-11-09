import React from "react";
import image from "./images/piano-keyboard-layout.png";


class ImgContainer extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="image-div flex">
        <img className="piano-image" src={image} alt="notes on a piano, one register"/>
      </div>
    )
  }
}


export default ImgContainer;