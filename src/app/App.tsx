import React, { useReducer, useState } from 'react';
import Cookies from 'universal-cookie';
import Bar from '../components/Bar/Bar-view';
import Card from '../components/Card/Card-view';
import Characters from '../components/Characters/Characters-view';
import Context, { Icontext } from '../components/Context';
import CookieNotice from '../components/CookieNotice/CookieNotice-container';
import { Reducer } from '../controller/Reducer';
import { color } from '../layout/themeStyle';
import { initialCharState } from '../model/charArray/charArray';
import { Action } from '../types/Actions';
import { ICookies, ICState, IState } from '../types/Types';

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

	// state & reducers
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

	// context
	const myContext: Icontext = {
		cookies,
		state,
		handleCharClick,
		handleEchoClick,
		handleCookieLoad,
		handleNextClick,
		handlePrevClick,
		handleDisplayClick,
		handleRandomizeClick,
		displayCard,
		displayLoad,
		disableLoad,
		displayRandomize,
		options
	};

	// components
	return (
		<Context.Provider value={myContext}>
			<div className="wrapper">
				<meta name="viewport" content="width=device-width, user-scalable=no" />
				<div
					className="content"
					style={{
						marginTop: 70,
						height: '100vh',
						backgroundColor: color.bgContent,
						opacity: displayCard || displayLoad ? 0.5 : 1
					}}
				>
					<CookieNotice />
					<Characters />
				</div>
				<Bar />
				<Card />
			</div>
		</Context.Provider>
	);
};

export default App;
