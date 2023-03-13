import React from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";

class About extends React.Component {
  render() {
    return (
      <div
        id="about"
        className="popup text-align-center pb-10 visibility-hidden"
      >
        <div className="popup-title">TON Wallet</div>
        <div id="about_version" className="popup-grey-text">
          Version: {"{"}
          {"{"}VERSION{"}"}
          {"}"}
        </div>
        <div className="popup-grey-text line-height-24">
          API provider:{" "}
          <a href="https://toncenter.com" target="_blank">
            toncenter.com
          </a>
          <br />
          <a href="https://github.com/toncenter/ton-wallet" target="_blank">
            GitHub
          </a>
          ,
          <a
            href="https://github.com/toncenter/ton-wallet/issues"
            target="_blank"
          >
            Issue Tracker
          </a>
        </div>
        <div className="popup-black-text about-magic">
          <h4>What is TON Magic?</h4>
          <p>
            TON Magic provides native <b>Telegram integration</b> by patching
            the official Telegram web app (Z version).
          </p>
          <p>
            Turn it on to send and receive Toncoins from any Telegram user.{" "}
            <a
              href="https://telegra.ph/Telegram--TON-11-10"
              id="about-magic-video"
              target="_blank"
            >
              More info and demo
            </a>
            .
          </p>
        </div>
        <div className="popup-footer">
          <button id="about_closeBtn" className="btn-lite">
            CLOSE
          </button>
        </div>
      </div>
    );
  }
}

export default About;
