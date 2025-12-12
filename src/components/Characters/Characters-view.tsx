import { useMemo, useRef, useEffect } from 'react';
import { charArr } from '../../model/charArr/charArr';
import { getGridLayout } from '../../model/charArr/selectionScreenPositions';
import { IChar, IState } from '../../types/Types';
import { Character } from './Character/Character-view';
import { gridContainerStyle, gridStyle, gridRowStyle, emptyCellStyle, CELL_SIZE, CELL_GAP } from './Characters-style';

interface CharactersProps {
  state: IState;
  handleCharClick: (charIndex: number, charState: keyof IState) => void;
  isRandomized?: boolean;
  currentCharIndex?: number;
}

const Characters = ({ state, handleCharClick, isRandomized = false, currentCharIndex }: CharactersProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Find character's column position in the grid
  const getCharacterColumn = (charIndex: number): number | null => {
    const char = charArr[charIndex];
    if (!char) return null;

    for (let row = 0; row < gridLayout.length; row++) {
      for (let col = 0; col < gridLayout[row].length; col++) {
        if (gridLayout[row][col] === char.id) {
          return col;
        }
      }
    }
    return null;
  };

  // Auto-scroll to center current character when it changes (only when randomized)
  useEffect(() => {
    if (!isRandomized || currentCharIndex === undefined || !containerRef.current) return;

    const col = getCharacterColumn(currentCharIndex);
    if (col === null) return;

    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const cellWidth = CELL_SIZE + CELL_GAP;

    // Calculate the X position of the character's center
    const charCenterX = col * cellWidth + CELL_SIZE / 2;

    // Calculate scroll position to center the character
    const targetScroll = charCenterX - containerWidth / 2;

    // Smooth scroll to the target position
    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: 'smooth',
    });
  }, [currentCharIndex, isRandomized, gridLayout]);

  return (
    <div ref={containerRef} className="grid-container" style={gridContainerStyle}>
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
