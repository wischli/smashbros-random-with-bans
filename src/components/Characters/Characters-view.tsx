import React, { useContext } from 'react';
import { charArray } from '../../model/charArray/charArray';
import { IChar, IState } from '../../types/Types';
import MyContext, { Icontext } from '../Context';
import { Character } from './Character/Character-view';
import { charRowStyle, charRowTitleStyle, charsStyle, wrapperStyle } from './Characters-style';

const Characters = () => {
  const { state }: { state: IState } = useContext(MyContext as React.Context<Icontext>);
  return (
    <div style={wrapperStyle}>
      {Object.keys(state).map((key: string) => {
        return (
          <div key={`${key}-wrapper`} style={charRowStyle}>
            <h2 style={charRowTitleStyle}>{key}</h2>
            <div className={`characters ${key}`} style={ charsStyle } key={key}>
              {state[key as keyof IState].map((charIndex: number) => {
                const character: IChar = charArray[charIndex];
                return <Character key={character.id} character={character} stateKey={key as keyof IState} charIndex={charIndex} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Characters;
