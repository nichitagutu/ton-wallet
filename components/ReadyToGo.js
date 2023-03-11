import React from "react";

class ReadyToGo extends React.Component {
  render() {
    return (
      <div id="readyToGo" className="screen visibility-hidden">
        <div className="middle">
          <div className="middle-content">
            {/* <tgs-player
              data-name="readyToGo"
              src="assets/lottie/done.tgs"
              width={120}
              height={120}
              className="screen-lottie"
            ></tgs-player> */}
            <div className="screen-title">Ready to go!</div>
            <div className="screen-text">
              You're all set. Now you have a wallet that
              <br />
              only you control - directly, without
              <br />
              middlemen or bankers.
            </div>
            <div>
              <button
                id="readyToGo_continueBtn"
                className="btn-blue screen-btn mt-170 mb-20"
              >
                View My Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadyToGo;
