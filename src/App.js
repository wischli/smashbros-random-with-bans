import React, { useState } from 'react';
import Characters from './components/Characters';
import CharacterList from './components/CharacterList';
import Context from './components/Context';

// const changeCharacters = (chars) => {
//   return characters.slice(0,1);
// }
// export default changeCharacters;
const splitArray = arrayInput => {
  const played = [];
  const disabled = [];
  const enabled = arrayInput.filter(el => {
    if (el.played){
      played.push(el);
    }
    else if (!el.enabled) {
      disabled.push(el);
    }
    return !el.played && el.enabled;
  });
  return {enabled, played, disabled};
}
const unifyToArray = (obj) => {
  // console.table([...Object.values(obj)]);
  let array = [];
  Object.values(obj).map(x => {
    array = [...array, ...x];
    return '';
  });
  return array;
}

const randomize = arrayInput => {
  const {played, enabled, disabled} = splitArray(arrayInput);
  let currentIndex = enabled.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [enabled[randomIndex], enabled[currentIndex]] = [enabled[currentIndex], enabled[randomIndex]];
  }
  return(unifyToArray({played, enabled, disabled}));
  // return [...enabled, ...played, ...disabled];
};

const App = () => {
  // const [characters, changeCharacters] = useState(CharacterList.slice(0, 5));
  const [characters, changeCharacters] = useState([...CharacterList]);

  const testState = (oldChars, id = -1) => {
    return oldChars.map(char => {
      // char.enabled = char.id === id ? !char.enabled : char.enabled;
      return char.id === id ? { ...char, enabled: !char.enabled } : { ...char };
    });
  };
  const handleClick = id => changeCharacters(testState(characters, id));
  const roundPlayed = inputChars => {
    if (inputChars.filter(char => char.played || !char.enabled).length === inputChars.length - 1) {
      setTimeout(() => {
        alert('Done Bro, resetting...');
        changeCharacters(
          CharacterList.map(character => {
            const char = character;
            char.enabled = true;
            char.played = false;
            return char;
          })
        );
      }, 1000);
      // return [...CharacterList];
    }
    const chars = [...inputChars];
    const char = chars[0];
    char.played = !char.played;
    chars.shift();
    chars.push(char);
    return unifyToArray(splitArray(chars));
  };
  const buttonStyle = {
    width: '50%',
    height: '50px',
    margin: 'auto',
    display: 'inline-flex',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '5px',
    boxShadow: '0px 0px 3px 1px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    position: window.innerWidth < 401 ? 'fixed' : '',
    bottom: window.innerWidth < 401 ? '0' : '',
  };
  return (
    <Context.Provider value={{ characters, handleClick }}>
      <Characters />
      <button
        type="button"
        style={buttonStyle}
        onClick={() => changeCharacters(randomize(characters))}
      >
        Randomize Chars
      </button>
      <button
        type="button"
        style={buttonStyle}
        onClick={() => changeCharacters(roundPlayed(characters))}
      >
        Set Played Round
      </button>
    </Context.Provider>
  );
};

// class App extends React.Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     characters: [
//   //       {
//   //         id: 1,
//   //         name: 'Kirby',
//   //         image: 'kirby.png'
//   //       },
//   //       {
//   //         id: 2,
//   //         name: 'Donkey Kong',
//   //         image: 'donkeykong.png'
//   //       }
//   //     ]
//   //   };
//   // }
//
//   render() {
//     return (
//       <div>
//         <Characters characters={characters} />
//       </div>
//     );
//   }
// }

export default App;
