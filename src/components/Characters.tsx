import React, { useContext } from 'react';
import Context, { Icontext } from './Context';
import { Istate, Icharacter } from './Interfaces';

/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */

// const imageFolder = `${window.location.href}images/character_icons`;
const getStyle = (prop: Icharacter, styleKey = ''): any => {
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
    const style: { [property: string]: any } = {
        character: {
            maxWidth: window.innerWidth < 1000 ? 60 : 85,
            maxHeight: window.innerWidth < 1000 ? 60 : 85,
            backgroundColor: imageColor,
            borderRadius: '100%',
            // display: prop.display ? 'block' : 'none'
            display: 'block,'
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

export const Character = (props: any) => {
    const { character } = props;
    const { handleCharClick } = useContext(Context as React.Context<Icontext>);
    return (
        <div
            className="character"
            role="button"
            tabIndex={0}
            id={character.id}
            onClick={() => handleCharClick(character)}
            onKeyPress={() => handleCharClick(character)}
            style={getStyle(character, 'character')}
        >
            <img
                src={character.media}
                style={getStyle(character, 'image')}
                alt={character.name}
            />
        </div>
    );
};

const Characters = () => {
    const { state, themeStyle }: { state: Istate; themeStyle: any } = useContext(Context as React.Context<Icontext>);
    return (
        <div
            className="characters"
            style={{ backgroundColor: themeStyle.backgroundColor }}
        >
        {
          Object.keys(state).map((key: string) => {
            return (
              <div key={key + '-wrapper'} style={themeStyle.characterRow}>
                <h2 style={themeStyle.characterRowTitle}>{key}</h2>
                <div className="characters" style={{...getStyle(state.enabled[0], 'characters')}} key={key}>
                {state[key as keyof Istate].map((character: Icharacter) => (
                    <Character key={character.id} character={character} />
                ))}
                </div>
              </div>
            )
          })
        }
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