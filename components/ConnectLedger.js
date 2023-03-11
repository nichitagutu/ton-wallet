import React from "react";

class ConnectLedger extends React.Component {
  render() {
    return (
      <div id="connectLedger" className="popup pb-10 visibility-hidden">
        <div className="popup-title">Connect Ledger</div>
        <div className="popup-black-text">
          Please use Edge/Google Chrome v89 or later.
        </div>
        <div className="popup-black-text mt-20">Turn off Ledger Live.</div>
        <div className="popup-black-text mt-20">
          If it does not connect, then try reconnecting the device.
        </div>
        <div className="popup-footer">
          <button id="connectLedger_cancelBtn" className="btn-lite">
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default ConnectLedger;
