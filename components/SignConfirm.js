import React from "react";

class SignConfirm extends React.Component {
  render() {
    return (
      <div id="signConfirm" className="popup pb-10 visibility-hidden">
        <div className="popup-title">Confirmation</div>
        <div className="popup-black-text">Do you want to sign:</div>
        <div id="signConfirmData" className="addr" />
        <div className="popup-grey-text text-align-center font-weight-bold text-danger">
          Signing custom data is very dangerous. Use only if you know what you
          are doing.
        </div>
        <button id="signConfirm_closeBtn" className="popup-close-btn" />
        <div className="popup-footer">
          <button id="signConfirm_cancelBtn" className="btn-lite">
            CANCEL
          </button>
          <button id="signConfirm_okBtn" className="btn-lite">
            SIGN
          </button>
        </div>
      </div>
    );
  }
}

export default SignConfirm;
