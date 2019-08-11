import React from 'react';
import { charArray } from '../../model/charArray/charArray';
import { ICookies, ICState, IState } from '../../types/Types';
import { imigify } from '../../utils';
import { btnRowStyle, buttonStyle, cardCookieStyle, cardImgStyle, cardStyle, cardTitleStyle, closeBtnStyle } from './Card-style';

const Card = (props: {
	cookies: ICookies;
	state: IState;
	handleNextClick: Function;
	handlePrevClick: Function;
	displayCard: boolean;
	displayLoad: boolean;
	disableLoad: Function;
	handleDisplayClick: Function;
	handleCookieLoad: Function;
}) => {
	const {
		cookies,
		state,
		handleNextClick,
		handlePrevClick,
		displayCard,
		displayLoad,
		disableLoad,
		handleDisplayClick,
		handleCookieLoad
	} = props;

	// display message when a character save was found
	let loadBlock = <div></div>;
	if (cookies.characters) {
		const date: string = new Date((cookies.characters as ICState).date).toUTCString();
		loadBlock = <p style={cardCookieStyle}>from {date}</p>;
	}

	// get current active character
	const character = charArray[state.enabled[0]];

	return (
		<div className="card" style={cardStyle(displayCard || displayLoad)}>
			<button
				type="button"
				style={closeBtnStyle}
				onClick={() => (displayLoad ? disableLoad(false) : handleDisplayClick(displayCard))}
				className="close"
			/>
			<h2 style={cardTitleStyle}>{displayLoad ? 'Discovered Save' : character.name}</h2>
			{displayLoad ? loadBlock : <img src={imigify(character.name)} style={cardImgStyle} alt={character.name} />}
			<div style={btnRowStyle}>
				<button
					type="button"
					style={buttonStyle(true)}
					onClick={() => (displayLoad ? disableLoad(false) : handlePrevClick())}
				>
					{displayLoad ? 'Dismiss' : 'Prev'}
				</button>
				<button
					type="button"
					style={buttonStyle(false)}
					onClick={() => (displayLoad ? handleCookieLoad(cookies.characters as ICState) : handleNextClick())}
				>
					{displayLoad ? 'Load' : 'Next'}
				</button>
			</div>
		</div>
	);
};

export default Card;
