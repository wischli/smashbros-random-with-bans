import { useMemo } from 'react';
import { charArr } from '../../model/charArr/charArr';
import { getGridLayout } from '../../model/charArr/selectionScreenPositions';
import { IChar, IState } from '../../types/Types';
import { Character } from './Character/Character-view';
import { gridContainerStyle, gridStyle, gridRowStyle, emptyCellStyle } from './Characters-style';

interface CharactersProps {
  state: IState;
  handleCharClick: (charIndex: number, charState: keyof IState) => void;
  isRandomized?: boolean;
  currentCharIndex?: number;
}

const Characters = ({ state, handleCharClick, isRandomized = false, currentCharIndex }: CharactersProps) => {
  // Build grid layout once
  const gridLayout = useMemo(() => getGridLayout(), []);

  // Build lookup maps for character states
  const stateMap = useMemo(() => {
    const map = new Map<number, { charIndex: number; stateKey: keyof IState }>();

    // Map charArr index to state
    state.enabled.forEach(idx => {
      const char = charArr[idx];
      if (char) map.set(char.id, { charIndex: idx, stateKey: 'enabled' });
    });
    state.disabled.forEach(idx => {
      const char = charArr[idx];
      if (char) map.set(char.id, { charIndex: idx, stateKey: 'disabled' });
    });
    state.played.forEach(idx => {
      const char = charArr[idx];
      if (char) map.set(char.id, { charIndex: idx, stateKey: 'played' });
    });
    state.hidden.forEach(idx => {
      const char = charArr[idx];
      if (char) map.set(char.id, { charIndex: idx, stateKey: 'hidden' });
    });

    return map;
  }, [state]);

  // Find character by ID in charArr
  const getCharByGridId = (gridId: number): { char: IChar; charIndex: number; stateKey: keyof IState } | null => {
    const stateInfo = stateMap.get(gridId);
    if (!stateInfo) return null;

    const char = charArr[stateInfo.charIndex];
    if (!char) return null;

    return { char, charIndex: stateInfo.charIndex, stateKey: stateInfo.stateKey };
  };

  return (
    <div className="grid-container" style={gridContainerStyle}>
      <div style={gridStyle}>
        {gridLayout.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} style={gridRowStyle}>
            {row.map((charId, colIndex) => {
              if (charId === null) {
                // Empty cell (Random slot)
                return <div key={`empty-${rowIndex}-${colIndex}`} style={emptyCellStyle} />;
              }

              const charInfo = getCharByGridId(charId);
              if (!charInfo) {
                // Character not found in charArr (shouldn't happen)
                return <div key={`missing-${rowIndex}-${colIndex}`} style={emptyCellStyle} />;
              }

              const { char, charIndex, stateKey } = charInfo;

              // Don't render hidden characters (show empty cell instead)
              if (stateKey === 'hidden') {
                return <div key={`hidden-${char.id}`} style={emptyCellStyle} />;
              }

              const isCurrent = isRandomized && charIndex === currentCharIndex;

              return (
                <Character
                  key={char.id}
                  character={char}
                  stateKey={stateKey}
                  charIndex={charIndex}
                  handleCharClick={handleCharClick}
                  isCurrent={isCurrent}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
