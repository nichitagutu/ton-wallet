import React from "react";

function Main() {
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
          <div className="balance-diamond-container">
            <div id="diamond" />
          </div>
        </div>
        <div className="your-balance">Your balance</div>
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
          <div>Wallet Created</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
