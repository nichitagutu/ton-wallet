import React from "react";

class EnterPassword extends React.Component {
  render() {
    return (
      <div id="enterPassword" className="popup pb-10 visibility-hidden">
        <div className="popup-title">Password</div>
        {/* <tgs-player
          data-name="enterPassword"
          src="assets/lottie/lock.tgs"
          width={150}
          height={150}
        /> */}
        <input
          id="enterPassword_input"
          placeholder="Enter your password"
          type="password"
          className="input-password"
        />
        <div className="popup-footer">
          <button id="enterPassword_cancelBtn" className="btn-lite">
            CANCEL
          </button>
          <button id="enterPassword_okBtn" className="btn-lite">
            NEXT
          </button>
        </div>
      </div>
    );
  }
}

export default EnterPassword;
