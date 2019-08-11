import React, { useContext } from "react";
import { IChar, IState } from "../../../types/Types";
import MyContext, { Icontext } from "../../Context";
import { charStyle, imageStyle } from "./Character-style";

export const Character = (props: { character: IChar; stateKey: keyof IState; charIndex: number }) => {
    const { character, charIndex, stateKey } = props;
    const { handleCharClick } = useContext(MyContext as React.Context<Icontext>);
    const getClassName = (played: boolean, enabled: boolean): keyof Omit<IState, 'hidden'> => {
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
        style={charStyle(stateKey)}
      >
        <img src={character.media} style={imageStyle(stateKey)} alt={character.name} className={getClassName(character.played, character.enabled) as string} />
      </div>
    );
  };