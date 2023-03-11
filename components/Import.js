import React from "react";

class Import extends React.Component {
  render() {
    return (
      <div id="import" className="screen text-align-center visibility-hidden">
        <button id="import_backBtn" className="btn-back" />
        <div className="middle">
          <div className="middle-content">
            <div className="screen-title mt-80">24 Secret Words</div>
            <div className="screen-text mb-10">
              Please restore access to your <b>non-hardware</b> wallet by
              <br />
              entering the 24 secret words you wrote
              <br />
              down when creating the wallet.
            </div>
            <button id="import_alertBtn" className="btn-lite">
              I don't have them
            </button>
            <div id="importWords"></div>
            <div id="wordsPopup" className="display-none"></div>
            <div className="clear-both">
              <button
                id="import_continueBtn"
                className="btn-blue screen-btn mt-30 mb-20"
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

export default Import;
