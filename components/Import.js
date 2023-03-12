import React from "react";
import { Button, WrappedButton } from "./Button";
import { ScreenText } from "./ScreenText";
import { ScreenTitle } from "./ScreenTitle";
import { CONTINUE_BUTTON_TEXT, IMPORT_ALERT_BUTTON_TEXT, IMPORT_SCREEN_TEXT, IMPORT_SCREEN_TITLE } from "./text/constants";

function Import() {
  return (
    <div id="import" className="screen text-align-center visibility-hidden">
      <Button id="import_backBtn" text="Back" className="btn-back" />
      <div className="middle">
        <div className="middle-content">
          <ScreenTitle text={IMPORT_SCREEN_TITLE} extraClassNames='mt-80' />
          <ScreenText text={IMPORT_SCREEN_TEXT} extraClassNames='mb-10' />
          <Button id="import_alertBtn" text={IMPORT_ALERT_BUTTON_TEXT} className='btn-lite' />
          <div id="importWords"></div>
          <div id="wordsPopup" className="display-none"></div>
          <WrappedButton id="import_continueBtn" text={CONTINUE_BUTTON_TEXT} outerClassName="clear-both" innerClassName="btn-blue screen-btn mt-30 mb-20" />
        </div>
      </div>
    </div>
  );
}

export default Import;
