import React from "react";

class CreatePassword extends React.Component {
  render() {
    return (
      <div id="createPassword" className="screen visibility-hidden">
        <div className="middle">
          <div className="middle-content">
                    {/* <LottiePlayer.LottiePlayer
          autoplay
          controls
          loop
          mode="normal"
          src="assets/lottie/lock.tgs"
          style="width: 120px; height: 120px;"
          className="screen-lottie"
        >
        </LottiePlayer.LottiePlayer> */}
            <div className="screen-title">Secure Password</div>
            <div className="screen-text">
              Please choose a secure password
              <br />
              for confirming your payments
            </div>
            <div className="mt-54">
              <input
                id="createPassword_input"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div>
              <input
                id="createPassword_repeatInput"
                placeholder="Repeat your password"
                type="password"
              />
            </div>
            <div>
              <button
                id="createPassword_continueBtn"
                className="btn-blue screen-btn mt-38 mb-20"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePassword;
