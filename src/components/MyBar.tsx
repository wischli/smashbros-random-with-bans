import React, { useContext } from 'react';
import Cookies from 'universal-cookie';
import Context, { Icontext } from './Context';
import { IState, ICState } from '../types/Types';

const MyBar = () => {
  const { state, themeStyle, displayCard, handleRandomizeClick, handleDisplayClick, handleEchoClick, displayRandomize, options } = useContext(Context as React.Context<Icontext>);
  const cookies = new Cookies();

  const saveCharacters = (inputState: IState) => {
    const currentState = Object.keys(inputState).reduce(
      (cookieState: ICState, key: string) => {
        const theKey = key as keyof IState;
        return { ...cookieState, [key]: inputState[theKey].map((charIndex: number) => charIndex) };
      },
      { enabled: [], played: [], disabled: [], hidden: [], date: new Date().toJSON() },
    );
    cookies.set('characters', JSON.stringify(currentState), { path: '/' });
  };

  const randomizeMsg = () => (displayRandomize ? 'Show Popup' : 'Randomize');
  const handleRandom = () => (displayRandomize ? handleDisplayClick(!displayCard) : handleRandomizeClick());

  return (
    <div className="nav" style={themeStyle.nav}>
      <button
        type="button"
        style={{
          ...themeStyle.button,
          width: '100%',
          backgroundColor: themeStyle.bgNavSecondaryBtn,
        }}
        onClick={() => handleEchoClick()}
      >
        {options.echo ? 'Hide Echoes' : 'Show Echoes'}
      </button>
      <button type="button" style={{ ...themeStyle.button, width: '100%' }} onClick={() => (displayCard ? handleDisplayClick(displayCard) : handleRandom())}>
        {displayCard ? 'Close Popup' : randomizeMsg()}
      </button>
      <button
        type="button"
        style={{
          ...themeStyle.button,
          width: '100%',
          backgroundColor: themeStyle.bgNavSecondaryBtn,
        }}
        onClick={() => saveCharacters(state)}
      >
        {'Save Chars'}
      </button>
    </div>
  );
};
export default MyBar;
