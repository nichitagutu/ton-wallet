import React from 'react'
import { WrappedButton } from './Button'
import { ScreenText } from './ScreenText'
import { ScreenTitle } from './ScreenTitle'
import {
	CREATE_SCREEN_TEXT_1,
	CREATE_SCREEN_TEXT_2,
	CREATE_SCREEN_TITLE,
} from './text/constants'

function Created() {
	return (
		<div id="created" className="screen visibility-hidden">
			<div className="middle">
				<div className="middle-content">
					<ScreenTitle text={CREATE_SCREEN_TITLE} />
					<ScreenText text={CREATE_SCREEN_TEXT_1} />
					<ScreenText text={CREATE_SCREEN_TEXT_2} />
					<WrappedButton
						id="createdContinueButton"
						text="Continue"
						outerClassName=""
						innerClassName="btn-blue screen-btn mt-18 mb-20"
					/>
				</div>
			</div>
		</div>
	)
}

export default Created
