import React, { useState } from 'react';
import Characters from './components/Characters';
import CharacterList from './components/CharacterList';
import Context from './components/Context';
import MyCard from './components/MyCard';
import MyBar from './components/MyBar';
import themeStyle from './components/ThemeStyle';
import { randomize, splitArray, unifyToArray, getLastPlayed } from './components/Utility';

// const changeCharacters = (chars) => {
//   return characters.slice(0,1);
// }
// export default changeCharacters;
const initialOptions = {
  echo: true
};

const App = () => {
  const [characters, changeCharacters] = useState([...CharacterList]);
  const [options, setOptions] = useState(initialOptions);
  const [displayCard, changeDisplay] = useState(false);

  const characterEnable = (oldChars, id = -1) => {
    return oldChars.map(char => {
      return char.id === id ? { ...char, enabled: !char.enabled } : { ...char };
    });
  };
  const handleDisplayClick = () => changeDisplay(!displayCard);
  const handleCharClick = id => changeCharacters(characterEnable(characters, id));
  const handleRandomizeClick = chars => {
    changeCharacters(randomize(chars));
    handleDisplayClick(!displayCard);
  };
  const displayEchoChar = (char) => char.echo.length && char.echo[0] % 1 !== 0 ? !char.display : char.display;
  const handleEchoClick = () => {
    changeCharacters(
      characters.map(char => {
        return {
          ...char,
          display: displayEchoChar(char),
        };
      })
    );
    setOptions({ ...options, echo: !options.echo });
  };
  const handleCookieLoad = chars => changeCharacters(chars);
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

  const handleNextClick = chars => {
    // TODO: fix hidden
    const validChars = chars.filter(char => char.display);
    changeCharacters(roundPlayed(validChars))
  };
  const handlePrevClick = chars => {
    const validChars = [...chars];
    // TODO: handle case for banned players
    const index = getLastPlayed(chars);
    const lastChar = chars[index];
    if (lastChar.played) {
      lastChar.played = false;
      return changeCharacters([lastChar, ...chars.slice(0, index - 1), ...chars.slice(index - 1, -1)]);
    }
    return validChars;
  };

  return (
    <Context.Provider
      value={{
        characters,
        handleCharClick,
        themeStyle,
        handleEchoClick,
        handleCookieLoad,
        handleNextClick,
        handlePrevClick,
        handleDisplayClick,
        handleRandomizeClick,
        displayCard,
        options
      }}
    >
    <div className="wrapper">
      <meta meta name="viewport" content="width=device-width, user-scalable=no" />
      <div className="content" style={{ marginTop: 70, height: '100vh', backgroundColor: 'rgb(72, 100, 113)', opacity: displayCard ? 0.5 : 1 }}>
        <Characters />
      </div>
      <MyBar />
      <MyCard />
    </div>

    </Context.Provider>
  );
};

export default App;
