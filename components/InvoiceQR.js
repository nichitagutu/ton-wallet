import React from "react";

class InvoiceQR extends React.Component {
  render() {
    return (
      <div id="invoiceQr" className="popup visibility-hidden">
        <div className="popup-title">Invoice QR</div>
        <div className="qr-container">
          <div id="invoiceQrImg" />
        </div>
        <div className="input-label">Expected Amount</div>
        <div id="invoiceQrAmount" className="popup-black-text">
          1
        </div>
        <button id="invoiceQr_shareBtn" className="btn-blue">
          Share QR Code
        </button>
        <button id="invoiceQr_closeBtn" className="popup-close-btn" />
      </div>
    );
  }
}

export default InvoiceQR;
