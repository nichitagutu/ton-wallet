import React from "react";
import { WrappedButton } from "./Button";

import { ScreenText } from "./ScreenText";
import { ScreenTitle } from "./ScreenTitle";

import { START_SCREEN_TEXT, START_SCREEN_TITLE } from "./text/constants";

function Start() {
  return (
    <div id="start" className="screen visibility-hidden">
      <div className="middle">
        <div className="middle-content">
          <ScreenTitle text={START_SCREEN_TITLE} />
          <ScreenText text={START_SCREEN_TEXT} />
          <WrappedButton id="start_createBtn" text="Create My Wallet" outerClassName="mt-95" innerClassName="btn-blue screen-btn" />
          <WrappedButton id="start_importBtn" text="Import existing wallet" outerClassName="mt-20" innerClassName="btn-lite font-weight-normal" />
          <WrappedButton id="start_importLedgerBtn" text="Connect Ledger" outerClassName="mt-10" innerClassName="btn-lite font-weight-normal" />
        </div>
      </div>
    </div>
  );
}


export default Start;
