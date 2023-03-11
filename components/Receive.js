import React from "react";

class Receive extends React.Component {
  render() {
    return (
      <div id="receive" className="popup visibility-hidden">
        <div className="popup-title">Receive TON</div>
        <div className="popup-text">Share this address to receive TON.</div>
        <div className="qr-container">
          <div id="qr" />
        </div>
        <div className="my-addr addr" />
        <button
          id="receive_showAddressOnDeviceBtn"
          className="btn-lite btn-lite-first"
        >
          Show Address on Device
        </button>
        <button id="receive_invoiceBtn" className="btn-lite">
          Create Invoice
        </button>
        <button id="receive_shareBtn" className="btn-blue">
          Share Wallet Address
        </button>
        <button id="receive_closeBtn" className="popup-close-btn" />
      </div>
    );
  }
}

export default Receive;
