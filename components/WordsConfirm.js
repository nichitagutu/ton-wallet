import React from "react";
import { WrappedButton } from "./Button";
import { ScreenText } from "./ScreenText";
import { ScreenTitle } from "./ScreenTitle";
import { CONTINUE_BUTTON_TEXT, WORDS_CONFIRM_SCREEN_TEXT_1, WORDS_CONFIRM_SCREEN_TITLE } from "./text/constants";

function WordsConfirm() {
  return (
    <div
      id="wordsConfirm"
      className="screen text-align-center visibility-hidden"
    >
      <button id="wordsConfirm_backBtn" className="btn-back" />
      <div className="middle">
        <div className="middle-content">
          <ScreenTitle text={WORDS_CONFIRM_SCREEN_TITLE} />
          <ScreenText text={WORDS_CONFIRM_SCREEN_TEXT_1} />
          <div id="confirmWordsNums" className="screen-text">
            Please enter the words <span />, <span /> and <span /> below:
          </div>
          <div id="confirmWords"></div>
          <div id="wordsConfirmPopup" className="display-none"></div>
          <WrappedButton id="wordsConfirm_continueBtn" text={CONTINUE_BUTTON_TEXT} outerClassName='clear-both' innerClassName="btn-blue screen-btn mt-26 mb-20" />
        </div>
      </div>
    </div>
  );
}

export default WordsConfirm;
