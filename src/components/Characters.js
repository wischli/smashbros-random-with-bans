import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

// import characterList from './CharacterList';

/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */

const imageFolder = `${window.location.origin}/images/character_icons`;
const getStyle = (prop, styleKey = '') => {
  // console.log('styleKey: ', styleKey);
  let imageColor = '';
  if (prop.played){
    imageColor = 'rgba(0, 255, 137, 0.64)';
    // imageColor = '#d9d9d9';
  }
  else if (prop.enabled){
    // imageColor = '#00ff89';
    imageColor = 'white';
  }
  else if (!prop.enabled){
    imageColor = '#ff0000b8';
  }
  // console.log(prop.played, imageColor);
  const style = {
    character: {},
    image: {
      maxWidth: window.innerWidth < 401 ? 55 : 80,
      // backgroundColor: 'black',
      borderRadius: '50%',
      padding: prop.enabled ? 2 : 2,
      opacity: prop.enabled ? 1 : 0.5,
      // margin: 2,
      backgroundColor: imageColor,
    },
    characters: {
      backgroundColor: '#486471',
      padding: window.innerWidth < 400 ? 5 : 30,
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
  const { character } = props;
  const { handleClick } = useContext(Context);
  return (
    <div
      className="character"
      role="button"
      tabIndex={0}
      id={character.id}
      onClick={() => handleClick(character.id)}
      onKeyPress={() => handleClick(character.id)}
    >
      <img src={imigify(character.name)} style={getStyle(character, 'image')} alt={character.name} />
    </div>
  );
};

const Characters = () => {
  const { characters } = useContext(Context);
  return (
    <div className="characters" style={getStyle(characters, 'characters')}>
      {characters.map(character => (
        <Character
          key={character.id}
          character={character}
        />
      ))}
    </div>
  );
};
export default Characters;

// Characters.propTypes = {
//   characters: PropTypes.arrayOf(PropTypes.object).isRequired
// };
Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired
};
