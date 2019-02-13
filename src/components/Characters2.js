import React from 'react';
import PropTypes from 'prop-types';
// import Context from './Context';

// import characterList from './CharacterList';

/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */

const imageFolder = `${window.location.origin}/images/character_icons`;
const getStyle = (prop, styleKey = '') => {
  // console.log('styleKey: ', styleKey);
  const style = {
    character: {},
    image: {
      maxWidth: 80,
      backgroundColor: 'black',
      borderRadius: '50%',
      padding: 5,
      opacity: prop.enabled ? 1 : 0.5
    },
    characters: {
      backgroundColor: '#486471',
      padding: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexFlow: 'row wrap',
      alignContent: 'flex-end'
    }
  };
  return styleKey in style ? style[styleKey] : '';
};

function imigify(name) {
  const title = name
    .split(/[. \-&]/g)
    .map(item => item.toLowerCase())
    .join('');
  return `${imageFolder}/${title}.png`;
}

const Character = props => {
  const { character, handleClick } = props;
  return (
    <div
      className="character"
      role="button"
      tabIndex={0}
      id={character.id}
      onClick={handleClick.bind(this, character.id)}
      onKeyPress={handleClick.bind(this, character.id)}
    >
      <img src={imigify(character.name)} style={getStyle(character, 'image')} alt={character.name} />
    </div>
  );
};

const Characters = props => {
  const { handleClick, characters } = props;
  return (
    <div className="characters" style={getStyle(characters, 'characters')}>
      {characters.map(character => (
        <Character
          key={character.id}
          character={character}
          handleClick={handleClick.bind(this, character.id)}
        />
      ))}
    </div>
  );
};
export default Characters;

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};
Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired
};
