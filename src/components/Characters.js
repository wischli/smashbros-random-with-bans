import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import characterList from './CharacterList';

// eslint-disable no-console

const imageFolder = `${window.location.origin}/images/character_icons`;
const styles = {
  image: {
    maxWidth: 80,
    backgroundColor: 'black',
    borderRadius: '50%',
    padding: 5,
    opacity: 0.7
  },
  'image:hover': {
    opacity: 1,
  },
  character: {
  },
  characters: {
    backgroundColor: '#486471',
    padding: 30,
    display: 'flex',
    alignItems: 'center',
    justifycontent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexFlow: 'row wrap',
    alignContent: 'flex-end',
  }
};

function imigify(name) {
  const title = name
    .split(/[\. \-\&]/g)
    .map(item => item.toLowerCase())
    .join('');
    console.log(name, title);
  return `${imageFolder}/${title}.png`;
}

const Character = (props) => {
  const { character } = props;
  return (
    <div className="character" id={character.id} onClick={props.handleClick.bind(this, character.id)}>
      <img src={imigify(character.name)} style={styles.image} alt="xxxx" />
    </div>
  );
};

const Characters = props => {
  const [state, changeState] = useState(0);
  const { characters } = props;
  return (
    <div className="characters" style={styles.characters}>
      {characters.map(character => (
        <Character key={character.id} character={character} handleClick={props.handleClick.bind(this, character.id)} />
      ))}
      {state === 0 ? changeState(1) : console.log('X')}
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
