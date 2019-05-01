import React, { useContext } from 'react';
import Cookies from 'universal-cookie';
import Context from './Context';
import { getCharactersByIds } from './Utility';
import CharacterList from './CharacterList';

const Options = () => {
  const { handleEchoClick, handleCookieLoad, themeStyle, characters } = useContext(Context);
  const cookies = new Cookies();
  const buttonStyle = {
    width: 'calc(100% - 10px)',
    margin: '4px 5px'
  };
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
  return (
    <div style={{ ...themeStyle, paddingBottom: 80 }}>
      <button
        type="button"
        style={{ ...themeStyle.button, ...buttonStyle }}
        onClick={() => handleEchoClick()}
      >
        Echo Click
      </button>
      <button
        type="button"
        style={{ ...themeStyle.button, ...buttonStyle }}
        onClick={() => saveCharacters(characters)}
      >
        Save Characters as Cookie
      </button>
      <button
        type="button"
        style={{ ...themeStyle.button, ...buttonStyle }}
        onClick={() => loadCharacters()}
      >
        Load Characters from Cookie
      </button>
    </div>
  );
};
export default Options;
