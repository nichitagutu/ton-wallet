import React from "react";

class Invoice extends React.Component {
  render() {
    return (
      <div id="invoice" className="popup visibility-hidden">
        <div className="popup-title">Create Invoice</div>
        <div>
          <div className="input-label">Amount</div>
        </div>
        <input
          id="invoice_amountInput"
          type="number"
          placeholder="Amount in TON you expect to receive"
        />
        <input
          id="invoice_commentInput"
          type="text"
          placeholder="Comment (optional)"
        />
        <div className="popup-grey-text">
          You can specify the amount and purpose of
          <br />
          the payment to save the sender some time.
        </div>
        <div className="input-label mt-24 mb-18">Invoice URL</div>
        <div id="invoice_link" className="popup-black-text">
          ton://transfer/
        </div>
        <div className="popup-grey-text mt-24">
          Share this address to receive TON.
        </div>
        <button id="invoice_qrBtn" className="btn-lite">
          Generate QR Code
        </button>
        <button id="invoice_shareBtn" className="btn-blue">
          Share Invoice URL
        </button>
        <button id="invoice_closeBtn" className="popup-close-btn" />
      </div>
    );
  }
}

export default Invoice;
