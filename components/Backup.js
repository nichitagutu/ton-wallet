import React from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";

class Backup extends React.Component {
  render() {
    return (
      <div id="backup" className="screen text-align-center visibility-hidden">
        <div className="middle">
          <div className="middle-content">
            {/* <LottiePlayer.LottiePlayer
              autoplay
              controls
              loop
              mode="normal"
              src="assets/lottie/paper.tgs"
              style="width: 120px; height: 120px;"
              className="screen-lottie mt-30"
            >
            </LottiePlayer.LottiePlayer> */}
            <div className="screen-title">24 secret words</div>
            <div className="screen-text">
              Write down these 24 words in the correct
              <br />
              order and store them in secret place.
            </div>
            <div className="screen-text">
              Use these secret words to restore access to
              <br />
              your wallet if you lose your password or
              <br />
              access to this device.
            </div>
            <div id="createWords" className="mt-10"></div>
            <div className="clear-both">
              <button
                id="backup_continueBtn"
                className="btn-blue screen-btn mt-26 mb-20"
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

export default Backup;
