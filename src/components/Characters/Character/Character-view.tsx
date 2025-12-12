import { IChar, IState } from "../../../types/Types";
import { charStyle, imageStyle, overlayStyle } from "./Character-style";

export const Character = (props: { character: IChar; stateKey: keyof IState; charIndex: number; handleCharClick: Function }) => {
  const { character, charIndex, stateKey, handleCharClick } = props;
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
      <img src={character.media} style={imageStyle()} alt={character.name} />
      <div style={overlayStyle(stateKey)} />
    </div>
  );
};