import React, { useState } from 'react';
import Characters from './components/Characters';
import CharacterList from './components/CharacterList';
import Context from './components/Context';
import Options from './components/Options';
import themeStyle from './components/ThemeStyle';
import { randomize, splitArray, unifyToArray } from './components/Utility';

// const changeCharacters = (chars) => {
//   return characters.slice(0,1);
// }
// export default changeCharacters;
const initialOptions = {
  echo: true,
};

const App = () => {
  const [characters, changeCharacters] = useState([...CharacterList]);
  const [options, setOptions] = useState(initialOptions)

  const characterEnable = (oldChars, id = -1) => {
    return oldChars.map(char => {
      return char.id === id ? { ...char, enabled: !char.enabled } : { ...char };
    });
  };
  const handleCharClick = id => changeCharacters(characterEnable(characters, id));
  const handleEchoClick = () => {
    changeCharacters(characters.map(char => {
      return {...char, display: char.echo.length  && char.echo[0] % 1 !== 0 ? !char.display : char.display}
    }))
    setOptions({...options, echo: !options.echo});
  }
  const handleCookieLoad = (chars) => changeCharacters(chars);
  const roundPlayed = inputChars => {
    // check if all characters have been played or banned => reset
    if (inputChars.filter(char => char.played || !char.enabled).length === inputChars.length - 1) {
      setTimeout(() => {
        console.log('Done Bro, resetting...'); // eslint-disable no-console
        changeCharacters(
          CharacterList.map(character => {
            return { ...character, enabled: true, played: false };
          })
        );
      }, 1000);
    }
    const chars = [...inputChars];
    const char = {
      ...chars.shift(),
      played: true
    };
    // char.played = !char.played;
    // chars.shift();
    chars.push(char);
    return unifyToArray(splitArray(chars));
  };
  const navStyle = {
    width: 'calc(100% - 20px)',
    padding: '10px',
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    backgroundColor: '#466370',
    position: window.innerWidth < 1000 ? 'sticky' : '',
    bottom: window.innerWidth < 1000 ? '0' : ''
  };
  const buttonStyle = ({ left }) => {
    return {
      width: '49%',
      backgroundColor: left ? '#ffb3b3' : '#99f9ae',
      color: left ? '#383838' : 'black',
      borderColor: left ? '#383838' : 'black',
    };
  };
  return (
    <Context.Provider value={{ characters, handleCharClick, themeStyle, handleEchoClick, handleCookieLoad }}>
      <Characters />
      <Options />
      <div className="nav" style={navStyle}>
        <button
          type="button"
          style={{...themeStyle.button, ...buttonStyle({left: true})}}
          onClick={() => changeCharacters(randomize(characters))}
        >
          Randomize
        </button>
        <button
          type="button"
          style={{...themeStyle.button, ...buttonStyle({left: false})}}
          onClick={() => changeCharacters(roundPlayed(characters))}
        >
          Round completed
        </button>
      </div>
    </Context.Provider>
  );
};

export default App;
