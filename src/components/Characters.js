import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */

const imageFolder = `${window.location.href}/images/character_icons`;
const getStyle = (prop, styleKey = '') => {
  // console.log('styleKey: ', styleKey);
  let imageColor = '';
  let opacity = 1;
  if (prop.played) {
    imageColor = '#00cc51';
    // imageColor = '#d9d9d9';
    opacity = 0.6;
  } else if (prop.enabled) {
    // imageColor = '#00ff89';
    imageColor = 'white';
    opacity = 1;
  } else if (!prop.enabled) {
    imageColor = '#ff0000b8';
    opacity = 0.6;
  }
  // console.log(prop.played, imageColor);
  const style = {
    character: {
      maxWidth: window.innerWidth < 1000 ? 60 : 85,
      maxHeight: window.innerWidth < 1000 ? 60 : 85,
      backgroundColor: imageColor,
      borderRadius: '100%',
      display: prop.display ? 'block' : 'none'
    },
    image: {
      margin: 'auto',
      display: 'block',
      maxWidth: window.innerWidth < 1000 ? 55 : 80,
      // backgroundColor: 'black',
      // borderRadius: '50%',
      padding: prop.enabled ? 1 : 1,
      opacity
      // margin: 2,
      // backgroundColor: imageColor,
    },
    characters: {
      backgroundColor: '#486471',
      padding: window.innerWidth < 1000 ? 5 : 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexFlow: 'row wrap',
      alignContent: 'flex-end'
    }
  };
  // return style.character;
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
  const { handleCharClick } = useContext(Context);
  return (
    <div
      className="character"
      role="button"
      tabIndex={0}
      id={character.id}
      onClick={() => handleCharClick(character.id)}
      onKeyPress={() => handleCharClick(character.id)}
      style={getStyle(character, 'character')}
    >
      <img
        src={imigify(character.name)}
        style={getStyle(character, 'image')}
        alt={character.name}
      />
    </div>
  );
};

const Characters = () => {
  const { characters, themeStyle } = useContext(Context);
  return (
    <div
      className="characters"
      style={{ ...getStyle(characters, 'characters'), backgroundColor: themeStyle.backgroundColor }}
    >
      {characters.map(character => (
        <Character key={character.id} character={character} />
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
    key: PropTypes.number,
    name: PropTypes.string
  }).isRequired
};
