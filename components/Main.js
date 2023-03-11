import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div id="main" className="screen visibility-hidden">
        <div className="head">
          <div className="head-row">
            <button id="main_refreshBtn" className="btn-round bg-refresh" />
            <div id="updateLabel" />
            <button id="main_settingsButton" className="btn-round bg-menu" />
          </div>
          <div className="balance-container">
            <div id="balance" />
            {/* <tgs-player
              data-name="symbol"
              src="assets/lottie/diamond.tgs"
              width={32}
              height={32}
              className="balance-symbol"
            ></tgs-player> */}
            <div className="balance-diamond-container">
              <div id="diamond" />
            </div>
          </div>
          <div className="your-balance">Your balance</div>
          {}
          {}
          {}
          {}
          <button id="main_receiveBtn" className="btn-blue">
            <div className="btn-icon bg-down-left" />
            Receive
          </button>
          <button id="sendButton" className="btn-blue display-none">
            <div className="btn-icon bg-down-left rotate-180" />
            Send
          </button>
        </div>
        <div id="transactionsContainer">
          <div id="transactionsList"></div>
          <div id="walletCreated" className="display-none">
            {/* <tgs-player
              data-name="main"
              width={150}
              height={150}
              src="assets/lottie/empty.tgs"
            ></tgs-player> */}
            <div>Wallet Created</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
