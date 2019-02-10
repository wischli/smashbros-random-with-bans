import React, { useState } from 'react';
import Characters from './components/Characters';
import CharacterList from './components/CharacterList';

// const changeCharacters = (chars) => {
//   return characters.slice(0,1);
// }
// export default changeCharacters;

const App = () => {
  const [state, changeState] = useState({
    ...CharacterList
  }
    // characters: [
    //   {
    //     id: 1,
    //     name: 'Kirby',
    //     image: 'kirby.png'
    //   },
    //   {
    //     id: 2,
    //     name: 'Donkey Kong',
    //     image: 'donkeykong.png'
    //   }
    // ]
  );
  const testState = (state, id = -1) => {
    console.log(id);
    return {
      characters: state.characters.filter(char => char.id !== id),
      // characters: [
        // ...state.characters,
        // {
        //   id: 1,
        //   name: 'Kirby',
        //   image: 'kirby.png'
        // }
      // ]
    };
  };
  return (
    <div>
      <Characters characters={state.characters} handleClick={(id) => changeState(testState(state, id))} onChange={() => console.log("YOO")} />
      // changeState(testState(state))} />
      <button type="button" onClick={() => changeState(testState(state))}>
        BUTTON
      </button>
    </div>
  );
}

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
