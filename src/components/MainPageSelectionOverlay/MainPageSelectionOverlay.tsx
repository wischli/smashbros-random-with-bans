import { CSSProperties, useMemo, useCallback } from 'react';
import { charArr } from '../../model/charArr/charArr';
import { getCharacterPosition, IMAGE_WIDTH, IMAGE_HEIGHT } from '../../model/charArr/selectionScreenPositions';
import { IState } from '../../types/Types';

interface MainPageSelectionOverlayProps {
  state: IState;
  handleCharClick: (charIndex: number, charState: keyof IState) => void;
  isRandomized: boolean;
}

// Colors - swapped: disabled/hidden = red, played = grey
const COLORS = {
  highlightMain: '#00ff00',    // Green for current character
  highlightShadow: '#ffff00',  // Yellow shadow
  disabled: 'rgba(255, 60, 60, 0.6)',  // Red (banned)
  played: 'rgba(80, 80, 80, 0.7)',     // Grey (already played)
  border: '#000000',
  headerBg: '#000000',
  headerText: '#ffffff',
};

// Full width header area
const HEADER_AREA = {
  x: 0,
  y: 0,
  width: IMAGE_WIDTH,
  height: 58,
};

const MainPageSelectionOverlay = ({
  state,
  handleCharClick,
  isRandomized,
}: MainPageSelectionOverlayProps) => {
  // Get the current character (first enabled)
  const currentCharIndex = state.enabled[0];
  const currentChar = currentCharIndex !== undefined ? charArr[currentCharIndex] : null;
  const currentPosition = currentChar ? getCharacterPosition(currentChar.id) : null;

  // Build sets for quick lookup
  const disabledSet = useMemo(() => new Set(state.disabled), [state.disabled]);
  const playedSet = useMemo(() => new Set(state.played), [state.played]);
  const hiddenSet = useMemo(() => new Set(state.hidden), [state.hidden]);

  // Get character state for a given index
  const getCharState = useCallback((charIndex: number): keyof IState => {
    if (disabledSet.has(charIndex)) return 'disabled';
    if (playedSet.has(charIndex)) return 'played';
    if (hiddenSet.has(charIndex)) return 'hidden';
    return 'enabled';
  }, [disabledSet, playedSet, hiddenSet]);

  // Build clickable character data (only used when not randomized)
  const clickableChars = useMemo(() => {
    return charArr
      .map((char, idx) => {
        if (hiddenSet.has(idx)) return null;
        const position = getCharacterPosition(char.id);
        if (!position) return null;
        return { charIndex: idx, position, char };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);
  }, [hiddenSet]);

  // Generate overlay rectangles for disabled/played characters
  const overlayRects = useMemo(() => {
    const rects: { charIndex: number; position: ReturnType<typeof getCharacterPosition>; type: 'disabled' | 'played' }[] = [];

    charArr.forEach((char, idx) => {
      if (hiddenSet.has(idx) || idx === currentCharIndex) return;

      const position = getCharacterPosition(char.id);
      if (!position) return;

      if (disabledSet.has(idx)) {
        rects.push({ charIndex: idx, position, type: 'disabled' });
      } else if (playedSet.has(idx)) {
        rects.push({ charIndex: idx, position, type: 'played' });
      }
    });

    return rects;
  }, [disabledSet, playedSet, hiddenSet, currentCharIndex]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const containerStyle: CSSProperties = {
    backgroundColor: '#1a1a2e',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: isMobile ? '10px' : '20px',
    paddingTop: isMobile ? '10px' : '20px',
    marginTop: 80, // Account for fixed navbar
    boxSizing: 'border-box',
    overflowY: 'auto',
    flex: 1,
  };

  const imageContainerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    maxWidth: '1280px',
    border: '4px solid #000',
    boxShadow: '8px 8px 0px #000',
    overflow: 'hidden',
    flexShrink: 0,
  };

  const imageStyle: CSSProperties = {
    display: 'block',
    width: '100%',
    height: 'auto',
  };

  const svgOverlayStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  // Header text depends on mode
  const headerText = isRandomized && currentChar
    ? `${currentChar.name.toUpperCase()} - FIND ON SCREEN`
    : 'CHARACTER SELECTION OVERVIEW';

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img
          src={`${import.meta.env.BASE_URL || '/'}images/char-selection-screen.png`}
          alt="Character Selection Screen"
          style={imageStyle}
        />
        <svg
          style={svgOverlayStyle}
          viewBox={`0 0 ${IMAGE_WIDTH} ${IMAGE_HEIGHT}`}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <style>
              {`
                @keyframes pulse {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.85; }
                }
                .highlight-rect {
                  animation: pulse 1.2s ease-in-out infinite;
                }
                .clickable-cell {
                  cursor: pointer;
                }
                .clickable-cell:hover {
                  opacity: 0.3;
                }
              `}
            </style>
          </defs>

          {/* Header label */}
          <rect
            x={HEADER_AREA.x}
            y={HEADER_AREA.y}
            width={HEADER_AREA.width}
            height={HEADER_AREA.height}
            fill={COLORS.headerBg}
          />
          <text
            x={IMAGE_WIDTH / 2}
            y={HEADER_AREA.height / 2 + 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={COLORS.headerText}
            fontSize={isMobile ? '18' : '28'}
            fontWeight="800"
            fontFamily="'Space Mono', monospace"
            letterSpacing="4"
          >
            {headerText}
          </text>

          {/* Character cells - clickable only when not randomized */}
          {!isRandomized ? (
            // Pre-randomization: clickable cells
            clickableChars.map(({ charIndex, position }) => {
              const charState = getCharState(charIndex);
              const isDisabled = charState === 'disabled';
              const isPlayed = charState === 'played';
              return (
                <rect
                  key={`click-${charIndex}`}
                  x={position.x}
                  y={position.y}
                  width={position.width}
                  height={position.height}
                  fill={isDisabled ? COLORS.disabled : isPlayed ? COLORS.played : 'transparent'}
                  stroke={COLORS.border}
                  strokeWidth="1"
                  className="clickable-cell"
                  onClick={() => handleCharClick(charIndex, charState)}
                />
              );
            })
          ) : (
            // Post-randomization: non-clickable overlays
            overlayRects.map(({ charIndex, position, type }) => (
              <rect
                key={charIndex}
                x={position!.x}
                y={position!.y}
                width={position!.width}
                height={position!.height}
                fill={type === 'disabled' ? COLORS.disabled : COLORS.played}
                stroke={COLORS.border}
                strokeWidth="1"
                style={{ pointerEvents: 'none' }}
              />
            ))
          )}

          {/* Current character highlight (green) - only in randomized mode */}
          {isRandomized && currentPosition && (
            <>
              {/* Yellow shadow offset */}
              <rect
                x={currentPosition.x + 5}
                y={currentPosition.y + 5}
                width={currentPosition.width}
                height={currentPosition.height}
                fill="none"
                stroke={COLORS.highlightShadow}
                strokeWidth="6"
                style={{ pointerEvents: 'none' }}
              />
              {/* Main green border */}
              <rect
                x={currentPosition.x}
                y={currentPosition.y}
                width={currentPosition.width}
                height={currentPosition.height}
                fill="none"
                stroke={COLORS.highlightMain}
                strokeWidth="9"
                className="highlight-rect"
                style={{ pointerEvents: 'none' }}
              />
            </>
          )}
        </svg>
      </div>
    </div>
  );
};

export default MainPageSelectionOverlay;
