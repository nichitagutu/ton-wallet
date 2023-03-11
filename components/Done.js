import React from "react";

class Done extends React.Component {
  render() {
    return (
      <div
        id="done"
        className="popup text-align-center pb-10 visibility-hidden"
      >
        {/* <tgs-player
          data-name="done"
          src="assets/lottie/done.tgs"
          width={150}
          height={150}
        /> */}
        <div className="popup-title">Done!</div>
        <div className="popup-grey-text">1 TON have been send</div>
        <div className="popup-footer">
          <button id="done_closeBtn" className="btn-lite">
            CLOSE
          </button>
        </div>
      </div>
    );
  }
}

export default Done;
