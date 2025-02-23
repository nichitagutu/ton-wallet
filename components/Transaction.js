import React from "react";

class Transaction extends React.Component {
  render() {
    return (
      <div id="transaction" className="popup visibility-hidden">
        <div className="popup-title">Transaction</div>
        <div id="transactionAmount">+0.1 TON</div>
        <div id="transactionFee">0.1 transaction fee</div>
        <div id="transactionStorageFee">0.1 storage fee</div>
        <div id="transactionSenderLabel" className="input-label mt-20">
          Sender
        </div>
        <div id="transactionSender" className="addr"></div>
        <div className="input-label">Date</div>
        <div id="transactionDate" className="popup-black-text"></div>
        <div id="transactionCommentLabel" className="input-label">
          Comment
        </div>
        <div id="transactionComment" className="popup-black-text"></div>
        <button id="transaction_sendBtn" className="btn-blue mt-20">
          Send TON to this address
        </button>
        <button id="transaction_closeBtn" className="popup-close-btn" />
      </div>
    );
  }
}

export default Transaction;
