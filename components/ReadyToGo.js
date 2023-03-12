import React from "react";
import { WrappedButton } from "./Button";
import { ScreenText } from "./ScreenText";
import { ScreenTitle } from "./ScreenTitle";

class ReadyToGo extends React.Component {
  render() {
    return (
      <div id="readyToGo" className="screen visibility-hidden">
        <div className="middle">
          <div className="middle-content">
            <ScreenTitle text="Ready to go!" />
            <ScreenText text="You're all set. Now you have a wallet that<br/>only you control - directly, without<br/>middlemen or bankers." />
            <WrappedButton id='readyToGo_continueBtn' text='View My Wallet' innerClassName='btn-blue screen-btn mt-170 mb-20' />
          </div>
        </div>
      </div>
    );
  }
}

export default ReadyToGo;
