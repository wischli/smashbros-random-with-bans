import React, { useState, useReducer } from 'react';
import Cookies from 'universal-cookie';
import Characters from './components/Characters';
import { initialCharState } from './components/CharacterList';
import CookieNotice from './components/CookieNotice';
import Context, { Icontext } from './components/Context';
import MyCard from './components/MyCard';
import MyBar from './components/MyBar';
import { Istate, Icharacter, ReducerAction, Icookies, IcookieState } from './components/Interfaces';
import themeStyle from './components/ThemeStyle';
import { myReducer } from './components/MyReducer';

const initialOptions = {
  echo: true,
};

const App = () => {
  // cookies
  const cookyInstance = new Cookies();
  const cookieCharacters = cookyInstance.get('characters');
  const cookieCheck: boolean = cookieCharacters !== undefined && typeof cookieCharacters === 'object' && Object.keys(cookieCharacters).length > 0;
  const cookies: Icookies = {
    characters: cookieCheck ? (cookieCharacters as IcookieState) : false,
    notice: cookyInstance.get('notice') === undefined,
  };

  // state & reducers
  const [state, dispatch]: [Istate, Function] = useReducer(myReducer, initialCharState);
  const [options, setOptions] = useState(initialOptions);
  const [displayCard, changeDisplay] = useState(false);
  const [displayLoad, disableLoad] = useState(cookieCheck);
  const [displayRandomize, disableRandomize] = useState(false);

  // handlers
  const handleDisplayClick = () => changeDisplay(!displayCard);
  const handleCharClick = (char: Icharacter) => dispatch({ type: ReducerAction.toggleChar, character: char });
  const handleRandomizeClick = () => {
    dispatch({ type: ReducerAction.randomize });
    disableRandomize(true);
    return handleDisplayClick();
  };
  const handleEchoClick = () => {
    setOptions({ ...options, echo: !options.echo });
    return dispatch({ type: ReducerAction.echo });
  };
  const handleCookieLoad = (cookieState: IcookieState) => {
    disableLoad(false);
    dispatch({ cookieState, type: ReducerAction.restore });
    disableRandomize(true);
    return changeDisplay(true);
  };
  const handleNextClick = () => dispatch({ type: ReducerAction.next });
  const handlePrevClick = () => dispatch({ type: ReducerAction.previous });

  // context
  const myContext: Icontext = {
    cookies,
    state,
    handleCharClick,
    themeStyle,
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
    options,
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
            backgroundColor: themeStyle.bgContent,
            opacity: displayCard || displayLoad ? 0.5 : 1,
          }}
        >
          <CookieNotice />
          <Characters />
        </div>
        <MyBar />
        <MyCard />
      </div>
    </Context.Provider>
  );
};

export default App;
