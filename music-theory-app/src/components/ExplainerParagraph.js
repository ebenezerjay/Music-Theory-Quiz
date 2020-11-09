import React from "react";

class ExplainerParagraph extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="paragraph-div flex">
        <p className="flex"> 
          C major has no sharps and no flats. If you are looking at a keyboard, you could
          play all the white keys from C to shining C and you'd be playing in C major.
        </p>
        <p className="flex">
          If you are wondering why some keys have more than one note on them in the image below,
          it's because they are considered enharmonic. The pitch is the same but you would refer to 
          it differently based on the context. As we go through the lessons, you'll realize what
          those differnt contexts will be. 
        </p>
      </div>
    )
  }
}

export default ExplainerParagraph;