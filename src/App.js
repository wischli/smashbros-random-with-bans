import React, { useState } from 'react';
import Characters from './components/Characters';
import CharacterList from './components/CharacterList';

function App() {
  const [state, setState] = useState({
    ...CharacterList
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
  });
  const testState = () => {
    return {
      characters: [
        ...state.characters,
        {
          id: 1,
          name: 'Kirby',
          image: 'kirby.png'
        }
      ]
    };
  };
  return (
    <div>
      <Characters characters={state.characters} />
      <button type="button" onClick={() => setState(testState)}>
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
