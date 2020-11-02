import React from "react";
import image from "./images/piano-keyboard-layout.png";


class ImgContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="image-div flex">
        <img className="piano-image" src={image}/>
      </div>
    )
  }
}


export default ImgContainer;