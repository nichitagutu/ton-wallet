import React from "react";

class Loader extends React.Component {
  render() {
    return (
      <div
        id="loader"
        className="popup text-align-center pb-10 visibility-hidden"
      >
        {/* <tgs-player
          data-name="loader"
          src="assets/lottie/intro.tgs"
          width={150}
          height={150}
        /> */}
      </div>
    );
  }
}

export default Loader;
