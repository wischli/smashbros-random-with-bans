import React, { useState, useReducer } from 'react';
import Cookies from 'universal-cookie';
import Characters from './components/Characters';
import { initialCharState } from './components/CharacterList';
import CookieNotice from './components/CookieNotice';
import Context, { Icontext } from './components/Context';
import MyCard from './components/MyCard';
import MyBar from './components/MyBar';
import { IState, ICookies, ICState } from './types/Types';
import { Action } from './types/Actions';
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
  const cookies: ICookies = {
    characters: cookieCheck ? (cookieCharacters as ICState) : false,
    notice: cookyInstance.get('notice') === undefined,
  };

  // state & reducers
  const [state, dispatch]: [IState, Function] = useReducer(myReducer, initialCharState);
  const [options, setOptions] = useState(initialOptions);
  const [displayCard, changeDisplay] = useState(false);
  const [displayLoad, disableLoad] = useState(cookieCheck);
  const [displayRandomize, disableRandomize] = useState(false);

  // handlers
  const handleDisplayClick = () => changeDisplay(!displayCard);
  const handleCharClick = (charIndex: number, charState: keyof IState) => dispatch({ charIndex, charState, type: Action.toggleChar });
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
