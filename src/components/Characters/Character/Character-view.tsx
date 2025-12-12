import { IChar, IState } from "../../../types/Types";
import { charStyle, imageStyle, overlayStyle, nameStyle, currentHighlightStyle } from "./Character-style";

interface CharacterProps {
  character: IChar;
  stateKey: keyof IState;
  charIndex: number;
  handleCharClick: Function;
  isCurrent?: boolean;
}

export const Character = ({ character, charIndex, stateKey, handleCharClick, isCurrent = false }: CharacterProps) => {
  return (
    <div
      className={`character ${isCurrent ? 'current-char' : ''}`}
      role="button"
      tabIndex={0}
      id={`${character.id}`}
      onClick={() => handleCharClick(charIndex, stateKey)}
      onKeyPress={() => handleCharClick(charIndex, stateKey)}
      style={charStyle(stateKey)}
    >
      <img src={character.media} style={imageStyle()} alt={character.name} />
      <div style={overlayStyle(stateKey)} />
      <div style={nameStyle}>{character.name}</div>
      {isCurrent && <div style={currentHighlightStyle} className="current-highlight" />}
    </div>
  );
};