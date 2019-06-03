import React, { useContext, useState } from 'react';
import Cookies from 'universal-cookie';
import Context, { Icontext } from './Context';
import { Istate, Icharacter, IcookieState } from './Interfaces';

const MyBar = () => {
  const {
    state,
    themeStyle,
    displayCard,
    handleRandomizeClick,
    handleDisplayClick,
    handleEchoClick,
    displayRandomize,
    options
  } = useContext(Context as React.Context<Icontext>);
    const cookies = new Cookies();

    const saveCharacters = (inputState: Istate) => {
        const currentState = Object.keys(inputState).reduce((state: IcookieState, key: string) => {
          const theKey: keyof Istate = key as keyof Istate;
          return {...state, [key]: inputState[theKey].map((char: Icharacter) => char.id)};
        }, { enabled: [], played: [], disabled: [], hidden: [], date: (new Date).toJSON()});
        cookies.set('characters', JSON.stringify(currentState), { path: '/' });
    };

    const randomizeMsg = () => (displayRandomize ? 'Show Popup' : 'Randomize');
    const handleRandom = () => displayRandomize ? handleDisplayClick(!displayCard) : handleRandomizeClick();

    return (
        <div className="nav" style={themeStyle.nav}>
            <button
                type="button"
                style={{
                    ...themeStyle.button,
                    width: '100%',
                    backgroundColor: themeStyle.bgNavSecondaryBtn
                }}
                onClick={() => handleEchoClick()}
            >
                {options.echo ? 'Hide Echoes' : 'Show Echoes'}
            </button>
            <button
                type="button"
                style={{ ...themeStyle.button, width: '100%' }}
                onClick={() => (displayCard ? handleDisplayClick(displayCard) : handleRandom())}
            >
                {displayCard ? 'Close Popup' : randomizeMsg()}
            </button>
            <button
                type="button"
                style={{
                    ...themeStyle.button,
                    width: '100%',
                    backgroundColor: themeStyle.bgNavSecondaryBtn
                }}
                onClick={() => (saveCharacters(state))}
            >
                {'Save Chars'}
            </button>
        </div>
    );
};
export default MyBar;
