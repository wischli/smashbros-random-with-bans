import React, { useReducer, useState } from 'react';
import Cookies from 'universal-cookie';
import Bar from '../components/Bar/Bar-view';
import Card from '../components/Card/Card-view';
import Characters from '../components/Characters/Characters-view';
import CookieNotice from '../components/CookieNotice/CookieNotice-container';
import { Reducer } from '../controller/Reducer';
import { initialCharState } from '../model/charArr/charArr';
import { Action } from '../types/Actions';
import { ICookies, ICState, IState } from '../types/Types';
import { appStyle } from './App-styling';

const initialOptions = {
	echo: true
};

const App = () => {
	// cookies
	const cookyInstance = new Cookies();
	const cookieCharacters = cookyInstance.get('characters');
	const cookieCheck: boolean =
		cookieCharacters !== undefined &&
		typeof cookieCharacters === 'object' &&
		Object.keys(cookieCharacters).length > 0;
	const cookies: ICookies = {
		characters: cookieCheck ? (cookieCharacters as ICState) : false,
		notice: cookyInstance.get('notice') === undefined
	};

	// hooks
	const [state, dispatch]: [IState, Function] = useReducer(Reducer, initialCharState);
	const [options, setOptions] = useState(initialOptions);
	const [displayCard, changeDisplay] = useState(false);
	const [displayLoad, disableLoad] = useState(cookieCheck);
	const [displayRandomize, disableRandomize] = useState(false);

	// handlers
	const handleDisplayClick = () => changeDisplay(!displayCard);
	const handleCharClick = (charIndex: number, charState: keyof IState) =>
		dispatch({ charIndex, charState, type: Action.toggleChar });
	const handleRandomizeClick = () => {
		dispatch({ type: Action.randomize });
		disableRandomize(true);
		return handleDisplayClick();
	};
	const handleEchoClick = () => {
		setOptions({ ...options, echo: !options.echo });
		return dispatch({ type: Action.echo });
	};
	const handleCookieLoad = (cookieState: ICState) => {
		disableLoad(false);
		dispatch({ cookieState, type: Action.restore });
		disableRandomize(true);
		return changeDisplay(true);
	};
	const handleNextClick = () => dispatch({ type: Action.next });
	const handlePrevClick = () => dispatch({ type: Action.previous });

	// components
	return (
		<div className="wrapper">
			<meta name="viewport" content="width=device-width, user-scalable=no" />
			<div className="content" style={appStyle(displayCard || displayLoad)}>
				<CookieNotice cookies={cookies} />
				<Characters state={state} handleCharClick={handleCharClick} />
			</div>
			<Bar
				state={state}
				displayCard={displayCard}
				handleRandomizeClick={handleRandomizeClick}
				handleDisplayClick={handleDisplayClick}
				handleEchoClick={handleEchoClick}
				displayRandomize={displayRandomize}
				options={options}
			/>
			<Card
				cookies={cookies}
				state={state}
				handleNextClick={handleNextClick}
				handlePrevClick={handlePrevClick}
				displayCard={displayCard}
				displayLoad={displayLoad}
				disableLoad={disableLoad}
				handleDisplayClick={handleDisplayClick}
				handleCookieLoad={handleCookieLoad}
			/>
		</div>
	);
};

export default App;
