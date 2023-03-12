import React from "react";
import { WrappedButton } from "./Button";
import { ScreenText } from "./ScreenText";
import { ScreenTitle } from "./ScreenTitle";

function CreatePassword() {
  return (
    <div id="createPassword" className="screen visibility-hidden">
      <div className="middle">
        <div className="middle-content">
          <ScreenTitle text="Secure Password" />
          <ScreenText text="Please choose a secure password for confirming your payments" />
          <Input id="createPassword_input" placeholder="Enter your password" type='password' outerClass='mt-54' />
          <Input id="createPassword_repeatInput" placeholder="Repeat your password" type='password' />
          <WrappedButton id="createPassword_continueBtn" text="Continue" innerClassName="btn-blue screen-btn mt-38 mb-20" />
        </div>
      </div>
    </div>
  );
}

export default CreatePassword;
