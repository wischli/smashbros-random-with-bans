import React, { useState, useReducer } from 'react';
import Characters from './components/Characters';
import { CharacterList, initialCharState } from './components/CharacterList';
import Context, { Icontext } from './components/Context';
import MyCard from './components/MyCard';
import MyBar from './components/MyBar';
import { Istate, Icharacter, ReducerAction} from './components/Interfaces';
import themeStyle from './components/ThemeStyle';
import { myReducer } from './components/MyReducer';

// const changeCharacters = (chars) => {
//   return characters.slice(0,1);
// }
// export default changeCharacters;
const initialOptions = {
  echo: true
};

const App = () => {
  // const [characters, changeCharacters] = useState([...CharacterList]);
  const [state, dispatch]: [Istate, any] = useReducer(myReducer, initialCharState);
  const [options, setOptions] = useState(initialOptions);
  const [displayCard, changeDisplay] = useState(false);
  const handleDisplayClick = () => changeDisplay(!displayCard);
  const handleCharClick = (char: Icharacter) => dispatch({ type: ReducerAction.toggleChar, character: char})
  const handleRandomizeClick = () => {
    dispatch({ type: ReducerAction.randomize });
    return handleDisplayClick();
  };
  const handleEchoClick = () => {
    setOptions({ ...options, echo: !options.echo });
    return dispatch({ type: ReducerAction.echo });
  };
  const handleCookieLoad = (cookieState: Istate) => dispatch({ cookieState, type: ReducerAction.restore });
  const handleNextClick = () => dispatch({ type: ReducerAction.next });
  const handlePrevClick = () => dispatch({ type: ReducerAction.previous });

  const myContext: Icontext = {
    state,
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
  };

  return (
    <Context.Provider
      value={myContext}
    >
    <div className="wrapper">
      <meta name="viewport" content="width=device-width, user-scalable=no" />
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
