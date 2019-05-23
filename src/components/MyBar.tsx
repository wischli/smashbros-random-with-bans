import React, { useContext, useState } from 'react';
import Cookies from 'universal-cookie';
import Context, { Icontext } from './Context';
import { CharacterList } from './CharacterList';
import { Istate, Icharacter, IcookieState } from './Interfaces';

// const buttonStyle = ({ left }) => {
//   return {
//     width: '49%',
//     backgroundColor: left ? '#ffb3b3' : '#99f9ae',
//     color: left ? '#383838' : 'black',
//     borderColor: left ? '#383838' : 'black'
//   };
// };

const getCharacterById = (id: number): Icharacter => {
    for (const character of CharacterList) {
        if (character.id === id) {
            return character;
        }
    }
    throw new Error(`Cannot find character with id ${id}`);
};
const getCharactersByIds = (cookieState: IcookieState): Istate => {
    return {
      enabled: cookieState.enabled.map((charId: number) => getCharacterById(charId)),
      played: cookieState.played.map((charId: number) => getCharacterById(charId)),
      disabled: cookieState.disabled.map((charId: number) => getCharacterById(charId)),
      hidden: cookieState.hidden.map((charId: number) => getCharacterById(charId)),
    };
};

const MyBar = () => {
    const [randomizeClicked, changeRandomizedClicked] = useState(false);
    const {
        state,
        themeStyle,
        displayCard,
        handleRandomizeClick,
        handleCookieLoad,
        handleDisplayClick,
        handleEchoClick,
        options
    } = useContext(Context as React.Context<Icontext>);
    const cookies = new Cookies();

    const saveCharacters = (inputState: Istate) => {
        const currentState = Object.keys(inputState).reduce((state: IcookieState, key: string) => {
          const theKey: keyof Istate = key as keyof Istate;
          return {...state, [key]: inputState[theKey].map((char: Icharacter) => char.id)};
        }, { enabled: [], played: [], disabled: [], hidden: []});
        cookies.set('characters', JSON.stringify(currentState), { path: '/' });
    };

    const loadCharacters = () => {
        const cookieState = cookies.get('characters');
        if (cookieState) {
            const { enabled, played, disabled, hidden }: IcookieState = cookieState;
            if (
                enabled.length + played.length + disabled.length + hidden.length ===
        CharacterList.length
            ) {
                handleCookieLoad(
                    getCharactersByIds(cookieState)
                );
            }
        } else {
            console.log('No character save (cookie) found.');
        }
    };

    const randomizeMsg = () => (randomizeClicked ? 'Show Card' : 'Randomize');
    const handleRandom = () => {
        if (randomizeClicked) {
            handleDisplayClick(!displayCard);
        } else {
            changeRandomizedClicked(true);
            handleRandomizeClick();
        }
    };

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
                onClick={() => (displayCard ? saveCharacters(state) : loadCharacters())}
            >
                {displayCard ? 'Save Chars' : 'Load Chars'}
            </button>
        </div>
    );
};
export default MyBar;
