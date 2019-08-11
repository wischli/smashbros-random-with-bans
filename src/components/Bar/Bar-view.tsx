import React, { useContext } from 'react';
import { themeButtonStyle } from '../../layout/themeStyle';
import { saveCharacters } from '../../utils';
import Context, { Icontext } from '../Context';
import { buttonStyle, navStyle } from './Bar-style';

const Bar = () => {
	const {
		state,
		displayCard,
		handleRandomizeClick,
		handleDisplayClick,
		handleEchoClick,
		displayRandomize,
		options
	} = useContext(Context as React.Context<Icontext>);

	// set center button message and action
	let centerBtn: {
		action: Function;
		msg: string;
	};
	if (displayCard) {
		centerBtn = {
			action: () => handleDisplayClick(displayCard),
			msg: 'Close Popup'
		};
	} else if (displayRandomize) {
		centerBtn = {
			action: () => handleDisplayClick(!displayCard),
			msg: 'Show Popup'
		};
	} else {
		centerBtn = {
			action: () => handleRandomizeClick(),
			msg: 'Randomize'
		};
	}

	return (
		<div className="nav" style={navStyle}>
			<button type="button" style={buttonStyle} onClick={() => handleEchoClick()}>
				{options.echo ? 'Hide Echoes' : 'Show Echoes'}
			</button>
			<button type="button" style={{ ...themeButtonStyle, width: '100%' }} onClick={() => centerBtn.action()}>
				{centerBtn.msg}
			</button>
			<button type="button" style={buttonStyle} onClick={() => saveCharacters(state)}>
				{'Save Chars'}
			</button>
		</div>
	);
};
export default Bar;
