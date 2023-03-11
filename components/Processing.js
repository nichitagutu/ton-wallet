import React from "react";

class Processing extends React.Component {
  render() {
    return (
      <div
        id="processing"
        className="popup text-align-center visibility-hidden"
      >
        {/* <tgs-player
          data-name="processing"
          src="assets/lottie/money.tgs"
          width={150}
          height={150}
        /> */}
        <div className="popup-title">Sending TON</div>
        <div className="popup-grey-text">
          Please wait a few seconds for your
          <br />
          transaction to be processed..
        </div>
        <button id="processing_closeBtn" className="popup-close-btn" />
      </div>
    );
  }
}

export default Processing;
