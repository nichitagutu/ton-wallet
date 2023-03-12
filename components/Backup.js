import React from "react";

import { ScreenTitle } from "./ScreenTitle";
import { ScreenText } from "./ScreenText";
import { WrappedButton } from "./Button";

import { BACKUP_SCREEN_TEXT_1, BACKUP_SCREEN_TEXT_2, BACKUP_SCREEN_TITLE, CONTINUE_BUTTON_TEXT } from "./text/constants";

function Backup() {
  return (
    <div id="backup" className="screen text-align-center visibility-hidden">
      <div className="middle">
        <div className="middle-content">
          <div className="screen-title">24 secret words</div>
          <ScreenTitle text={BACKUP_SCREEN_TITLE} />
          <ScreenText text={BACKUP_SCREEN_TEXT_1} />
          <ScreenText text={BACKUP_SCREEN_TEXT_2} />
          <div id="createWords" className="mt-10"></div>
          <WrappedButton id="backup_continueBtn" text={CONTINUE_BUTTON_TEXT} outerClassName="clear-both" innerClassName="btn-blue screen-btn mt-26 mb-20" />
        </div>
      </div>
    </div>
  );
}

export default Backup;
