import React from 'react';
import PropTypes from 'prop-types';
// import characterList from './CharacterList';

// eslint-disable no-console

const imageFolder = `${window.location.origin}/images/character_icons`;

function imigify(name) {
  const title = name
    .split(' ')
    .map(item => item.toLowerCase())
    .join('');
  return `${imageFolder}/${title}.png`;
}

const Character = props => {
  const { character } = props;
  return (
    <div className="character" id={character.id}>
      <h3>{character.name}</h3>
      <img src={imigify(character.name)} alt="xxxx" />
    </div>
  );
};

const Characters = props => {
  const { characters } = props;
  return (
    <div className="characters">
      {characters.map(character => (
        <Character key={character.id} character={character} />
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
