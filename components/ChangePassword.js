import React from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";

class ChangePassword extends React.Component {
  render() {
    return (
      <div id="changePassword" className="popup pb-10 visibility-hidden">
        <div className="popup-title">Change Password</div>
        {/* <LottiePlayer.LottiePlayer
          autoplay
          controls
          loop
          mode="normal"
          src="assets/lottie/lock.tgs"
          style="width: 150px; height: 150px;"
        >
        </LottiePlayer.LottiePlayer> */}
        <input
          id="changePassword_oldInput"
          placeholder="Enter your old password"
          type="password"
          className="input-password"
        />
        <input
          id="changePassword_newInput"
          placeholder="Enter a new password"
          type="password"
          className="input-password mt-20"
        />
        <input
          id="changePassword_repeatInput"
          placeholder="Repeat the new password"
          type="password"
          className="input-password"
        />
        <div className="popup-footer">
          <button id="changePassword_cancelBtn" className="btn-lite">
            CANCEL
          </button>
          <button id="changePassword_okBtn" className="btn-lite">
            SAVE
          </button>
        </div>
      </div>
    );
  }
}

export default ChangePassword;
