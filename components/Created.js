import React from "react";

class Created extends React.Component {
  render() {
    return (
      <div id="created" className="screen visibility-hidden">
        <div className="middle">
          <div className="middle-content">
            {/* <LottiePlayer.LottiePlayer
              autoplay
              controls
              loop
              mode="normal"
              src="assets/lottie/created.tgs"
              style="width: 120px; height: 120px;"
              className="screen-lottie"
            >
            </LottiePlayer.LottiePlayer> */}
            <div className="screen-title">Congratulations</div>
            <div className="screen-text">
              Your TON wallet has just been created.
              <br />
              Only you control it.
            </div>
            <div className="screen-text">
              To be able to always have access to it,
              <br />
              please set up a secure password and write
              <br />
              down secret words.
            </div>
            <div>
              <button
                id="createdContinueButton"
                className="btn-blue screen-btn mt-18 mb-20"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Created;
