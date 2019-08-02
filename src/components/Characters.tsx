import React, { useContext } from 'react';
import Context, { Icontext } from './Context';
import { Istate, Icharacter } from './Interfaces';
import { CharacterList } from './CharacterList';

const getStyle = (charState: keyof Istate, styleKey = ''): React.CSSProperties | undefined => {
  let imageColor = '';
  let opacity = 1;
  if (charState === 'played') {
    imageColor = '#70f78e';
    // imageColor = '#d9d9d9';
    opacity = 0.6;
  } else if (charState === 'hidden') {
    imageColor = 'grey';
    opacity = 0.6;
  } else if (charState === 'enabled') {
    // imageColor = '#00ff89';
    imageColor = 'white';
    opacity = 1;
  } else if (charState === 'disabled') {
    imageColor = '#ff6767b8';
    // imageColor = '#ff0000b8';
    opacity = 0.6;
  }
  const style: { [className: string]: React.CSSProperties } = {
    character: {
      maxWidth: window.innerWidth < 1000 ? 60 : 85,
      maxHeight: window.innerWidth < 1000 ? 60 : 85,
      backgroundColor: imageColor,
      borderRadius: '100%',
      // display: charState === 'display '? 'block' : 'none'
      display: 'block,',
    },
    image: {
      opacity,
      margin: 'auto',
      display: 'block',
      maxWidth: window.innerWidth < 1000 ? 55 : 80,
      // backgroundColor: 'black',
      // borderRadius: '50%',
      padding: charState === 'enabled' ? 1 : 1,
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
      alignContent: 'flex-end',
    },
  };
  // return style.character;
  return styleKey in style ? style[styleKey] : undefined;
};

export const Character = (props: { character: Icharacter; stateKey: keyof Istate; charIndex: number }) => {
  const { character, charIndex, stateKey } = props;
  const { handleCharClick } = useContext(Context as React.Context<Icontext>);
  const getClassName = (played: boolean, enabled: boolean): keyof Omit<Istate, 'hidden'> => {
    if (played) {
      return 'played';
    }
    return enabled ? 'enabled' : 'disabled';
  };
  return (
    <div
      className="character"
      role="button"
      tabIndex={0}
      id={`${character.id}`}
      onClick={() => handleCharClick(charIndex, stateKey)}
      onKeyPress={() => handleCharClick(charIndex, stateKey)}
      style={getStyle(stateKey, 'character')}
    >
      <img src={character.media} style={getStyle(stateKey, 'image')} alt={character.name} className={getClassName(character.played, character.enabled)} />
    </div>
  );
};

const Characters = () => {
  const { state, themeStyle }: { state: Istate; themeStyle: any } = useContext(Context as React.Context<Icontext>);
  return (
    <div className="characters" style={{ backgroundColor: themeStyle.backgroundColor }}>
      {Object.keys(state).map((key: string) => {
        const className = `characters ${key}`;
        return (
          <div key={`${key}-wrapper`} style={themeStyle.characterRow}>
            <h2 style={themeStyle.characterRowTitle}>{key}</h2>
            <div className={className} style={{ ...getStyle(key as keyof Istate, 'characters') }} key={key}>
              {state[key as keyof Istate].map((charIndex: number) => {
                const character: Icharacter = CharacterList[charIndex];
                return <Character key={character.id} character={character} stateKey={key as keyof Istate} charIndex={charIndex} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Characters;

// Characters.propTypes = {
//   characters: PropTypes.arrayOf(PropTypes.object).isRequired
// };
// Character.propTypes = {
//   character: PropTypes.shape({
//     id: PropTypes.number,
//     key: PropTypes.number,
//     name: PropTypes.string
//   }).isRequired
// };
