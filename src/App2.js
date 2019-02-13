import React, { useState } from 'react';
import Characters from './components/Characters';
import CharacterList from './components/CharacterList';
// import Context from './components/Context';

// const changeCharacters = (chars) => {
//   return characters.slice(0,1);
// }
// export default changeCharacters;

const randomize = arrayInput => {
  const disabled = [];
  const enabled = arrayInput.filter(el => {
    if (!el.enabled){
      disabled.push(el);
    }
    return el.enabled;
  });
  let currentIndex = enabled.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [enabled[randomIndex], enabled[currentIndex]] = [enabled[currentIndex], enabled[randomIndex]];
  }
  return [...enabled, ...disabled];
};

const App = () => {
  const [characters, changeCharacters] = useState([...CharacterList]);

  // const { handleClick2 } = useContext(Context);
  const testState = (oldChars, id = -1) => {
    return oldChars.map(char => {
      // char.enabled = char.id === id ? !char.enabled : char.enabled;
      return char.id === id ? { ...char, enabled: !char.enabled } : { ...char };
    });
  };
  return (
    <div>
      <Characters
        characters={characters}
        handleClick={id => changeCharacters(testState(characters, id))}
      />
      <button type="button" onClick={() => changeCharacters(randomize(characters))}>
        BUTTON
      </button>
    </div>
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
