import React from 'react';
import { charArr } from '../../model/charArr/charArr';
import { IChar, IState } from '../../types/Types';
import { Character } from './Character/Character-view';
import { charRowStyle, charRowTitleStyle, charsStyle, wrapperStyle } from './Characters-style';

const Characters = (props: {state: IState, handleCharClick: Function}) => {
  const { state, handleCharClick } = props;
  return (
    <div style={wrapperStyle}>
      {Object.keys(state).map((key: string) => {
        return (
          <div key={`${key}-wrapper`} style={charRowStyle}>
            <h2 style={charRowTitleStyle}>{key}</h2>
            <div className={`characters ${key}`} style={ charsStyle } key={key}>
              {state[key as keyof IState].map((charIndex: number) => {
                const character: IChar = charArr[charIndex];
                return <Character key={character.id} character={character} stateKey={key as keyof IState} charIndex={charIndex} handleCharClick={handleCharClick} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Characters;
