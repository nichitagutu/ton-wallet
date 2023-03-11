import React from "react";

class Start extends React.Component {
  render() {
    return (
      <div id="start" className="screen visibility-hidden">
        <div className="middle">
          <div className="middle-content">
            {/* <tgs-player
              data-name="start"
              src="assets/lottie/intro.tgs"
              width={120}
              height={120}
              className="screen-lottie"
            ></tgs-player> */}
            <div className="screen-title">TON Wallet</div>
            <div className="screen-text">
              TON wallet allows you to make fast and
              <br />
              secure blockchain-based payments
              <br />
              without intermediaries.
            </div>
            <div className="mt-95">
              <button id="start_createBtn" className="btn-blue screen-btn">
                Create My Wallet
              </button>
            </div>
            <div className="mt-20">
              <button
                id="start_importBtn"
                className="btn-lite font-weight-normal"
              >
                Import existing wallet
              </button>
            </div>
            <div className="mt-10">
              <button
                id="start_importLedgerHidBtn"
                className="btn-lite font-weight-normal"
              >
                Connect Ledger
              </button>
            </div>
            {}
            {}
            {}
            {}
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
