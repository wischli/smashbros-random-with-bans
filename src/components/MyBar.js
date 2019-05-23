import React, { useContext, useState } from 'react';
import Cookies from 'universal-cookie';
import Context from './Context';
import { getCharactersByIds } from './Utility';
import CharacterList from './CharacterList';

const navStyle = {
  width: 'calc(100% - 20px)',
  padding: '10px',
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  backgroundColor: '#466370',
  position: 'fixed',
  height: 50,
  top: 0,
  alignItems: 'center',
  // bottom: window.innerWidth < 1000 ? '0' : ''
};
// const buttonStyle = ({ left }) => {
//   return {
//     width: '49%',
//     backgroundColor: left ? '#ffb3b3' : '#99f9ae',
//     color: left ? '#383838' : 'black',
//     borderColor: left ? '#383838' : 'black'
//   };
// };

const MyBar = () => {
  const [randomizeClicked, changeRandomizedClicked] = useState(false);
  const { characters, themeStyle, displayCard, handleRandomizeClick, handleCookieLoad, handleDisplayClick, handleEchoClick, options } = useContext(Context);
  const cookies = new Cookies();

  const saveCharacters = chars => {
    const currentState = chars.reduce(
      (obj, char) => {
        if (char.played) {
          obj.played.push(char.id);
        } else if (char.enabled) {
          obj.enabled.push(char.id);
        } else {
          obj.disabled.push(char.id);
        }
        return obj;
      },
      { enabled: [], played: [], disabled: [] }
    );
    cookies.set('characters', JSON.stringify(currentState), { path: '/' });
  };

  const loadCharacters = () => {
    const cookieChars = cookies.get('characters');
    if (cookieChars) {
      const { enabled, played, disabled } = cookieChars;
      if (enabled.length + played.length + disabled.length === CharacterList.length) {
        handleCookieLoad(
          getCharactersByIds({ characters: CharacterList, enabled, played, disabled })
        );
      }
    } else {
      console.log('No character save (cookie) found.');
    }
  };

  const echoMsg = options.echo ? 'Hide Echoes' : 'Show Echoes';
  const randomizeMsg = () => randomizeClicked ? 'Show Card' : 'Randomize';
  const handleRandom = () => {
    if (randomizeClicked){
      handleDisplayClick(!displayCard);
    } else {
      changeRandomizedClicked(true);
      handleRandomizeClick(characters);
    }
  }

  return (
    <div className="nav" style={navStyle}>
      <button
      type="button"
      style={{ ...themeStyle.button, width: '100%' }}
      onClick={() => displayCard ? handleEchoClick() :  loadCharacters() }
      >
      { !displayCard ? 'Load Chars' : echoMsg }
      </button>
      <button
        type="button"
        style={{ ...themeStyle.button, width: '100%' }}
        onClick={() => displayCard ? handleDisplayClick(displayCard) : handleRandom()}
      >
        { displayCard ? 'To Selection' : randomizeMsg()}
      </button>
      <button
        type="button"
        style={{ ...themeStyle.button, width: '100%' }}
        onClick={() => saveCharacters(characters)}
      >
        Save Chars
      </button>
  </div>
  );
}
export default MyBar;
