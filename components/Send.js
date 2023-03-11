import React from "react";

class Send extends React.Component {
  render() {
    return (
      <div id="send" className="popup visibility-hidden">
        <div className="popup-title">Send TON</div>
        <div className="input-label">Recipient wallet address</div>
        <input
          id="toWalletInput"
          type="text"
          placeholder="Enter wallet address"
        />
        <div className="popup-grey-text">
          Copy the 48-letter wallet address of the recipient here or ask them to
          send you a ton:// link
        </div>
        <div className="position-relative w-100">
          <div className="input-label">Amount</div>
          <div id="sendBalance">Balance:</div>
        </div>
        <input id="amountInput" type="number" placeholder={0.0} />
        <input id="commentInput" type="text" placeholder="Comment (optional)" />
        <button id="send_btn" className="btn-blue">
          Send TON
        </button>
        <button id="send_closeBtn" className="popup-close-btn" />
      </div>
    );
  }
}

export default Send;
