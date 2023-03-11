import React from "react";

class Delete extends React.Component {
  render() {
    return (
      <div id="delete" className="popup pb-10 visibility-hidden">
        <div className="popup-title">Log Out</div>
        <div className="popup-black-text">
          This will disconnect the wallet from this
          <br />
          app. You will be able to restore your
          <br />
          wallet using <b>24 secret words</b> - or import
          <br />
          another wallet.
        </div>
        <div className="popup-black-text mt-20">
          Wallets are located in the decentralized
          <br />
          TON Blockchain. If you want the wallet to
          <br />
          be deleted simply transfer all the TON
          <br />
          from it and leave it empty.
        </div>
        <div className="popup-footer">
          <button id="delete_cancelBtn" className="btn-lite">
            CANCEL
          </button>
          <button id="delete_okBtn" className="btn-lite btn-lite-red">
            DISCONNECT
          </button>
        </div>
      </div>
    );
  }
}

export default Delete;
