import React from "react";

class WordsConfirm extends React.Component {
  render() {
    return (
      <div
        id="wordsConfirm"
        className="screen text-align-center visibility-hidden"
      >
        <button id="wordsConfirm_backBtn" className="btn-back" />
        <div className="middle">
          <div className="middle-content">
            {/* <tgs-player
              data-name="wordsConfirm"
              src="assets/lottie/confirm.tgs"
              width={120}
              height={120}
              className="screen-lottie mt-30"
            ></tgs-player> */}
            <div className="screen-title">Test Time!</div>
            <div className="screen-text">
              Now let's check that you wrote your secret
              <br />
              words correctly.
              <br />
            </div>
            <div id="confirmWordsNums" className="screen-text">
              Please enter the words <span />, <span /> and <span /> below:
            </div>
            <div id="confirmWords"></div>
            <div id="wordsConfirmPopup" className="display-none"></div>
            <div className="clear-both">
              <button
                id="wordsConfirm_continueBtn"
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

export default WordsConfirm;
