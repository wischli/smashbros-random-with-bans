import React, { useContext } from 'react';
import Context from './Context';
import { imigify } from './Characters';

const MyCard = () => {
  // const [display, changeDisplay] = useState(true);
  // const handleClick = () => changeDisplay(!display);

  const { characters, themeStyle, handleNextClick, handlePrevClick, displayCard, handleDisplayClick } = useContext(Context);
  const character = characters[0];
  return (
    <div className="card" style={{ ...themeStyle.card, display: displayCard ? 'block' : 'none' }}>
      <button
        type="button"
        style={{ ...themeStyle.cardClose }}
        onClick={() => handleDisplayClick(displayCard)}
        className="close"
      >
      </button>
      <h2 style={themeStyle.cardTitle}>{character.name}</h2>
      <img src={imigify(character.name)} style={{ ...themeStyle.cardImg }} alt={character.name} />
      <div style={{ ...themeStyle.buttonRow }}>
        <button
          type="button"
          style={{ ...themeStyle.button, ...themeStyle.buttonLeft }}
          onClick={() => handlePrevClick(characters)}
        >
          Prev
        </button>
        <button
          type="button"
          style={{ ...themeStyle.button, ...themeStyle.buttonRight }}
          onClick={() => handleNextClick(characters)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyCard;
