import { useState, useEffect, useRef } from "react";
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
  const [isAnimating, setIsAnimating] = useState(false);
  const prevStateRef = useRef(stateKey);

  useEffect(() => {
    if (prevStateRef.current !== stateKey) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 400);
      prevStateRef.current = stateKey;
      return () => clearTimeout(timer);
    }
  }, [stateKey]);

  return (
    <div
      className={`character ${isCurrent ? 'current-char' : ''} ${isAnimating ? 'state-changing' : ''}`}
      role="button"
      tabIndex={0}
      id={`${character.id}`}
      onClick={() => handleCharClick(charIndex, stateKey)}
      onKeyPress={() => handleCharClick(charIndex, stateKey)}
      style={charStyle(stateKey)}
    >
      <img src={character.media} style={imageStyle()} alt={character.name} />
      <div className="char-overlay" style={overlayStyle(stateKey)} />
      <div style={nameStyle}>{character.name}</div>
      {isCurrent && <div style={currentHighlightStyle} className="current-highlight" />}
    </div>
  );
};