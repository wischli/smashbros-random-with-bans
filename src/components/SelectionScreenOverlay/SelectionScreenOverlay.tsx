import { CSSProperties, useMemo } from 'react';
import { charArr } from '../../model/charArr/charArr';
import { getCharacterPosition, IMAGE_WIDTH, IMAGE_HEIGHT } from '../../model/charArr/selectionScreenPositions';
import { IState } from '../../types/Types';
import { imigify } from '../../utils';

interface SelectionScreenOverlayProps {
  state: IState;
  currentCharIndex: number;
}

// Neo-brutalism colors
const COLORS = {
  highlightMain: '#00ff00',    // Green main border
  highlightShadow: '#ffff00',  // Yellow shadow
  disabled: 'rgba(80, 80, 80, 0.7)',
  played: 'rgba(255, 60, 60, 0.5)',
  border: '#000000',
  labelBg: '#000000',
  labelText: '#ffffff',        // White text
};

// Full width header area for label
const HEADER_AREA = {
  x: 0,
  y: 0,
  width: IMAGE_WIDTH,
  height: 58,
};

const SelectionScreenOverlay = ({ state, currentCharIndex }: SelectionScreenOverlayProps) => {
  const currentChar = charArr[currentCharIndex];
  const currentPosition = currentChar ? getCharacterPosition(currentChar.id) : null;

  // Get left and right neighbors based on grid position (not random order)
  const { leftChar, rightChar } = useMemo(() => {
    if (!currentPosition) return { leftChar: null, rightChar: null };

    const { row, col } = currentPosition;

    // Find character at left position (col - 1)
    let leftCharResult = null;
    if (col > 0) {
      // Find character at (row, col-1)
      for (const char of charArr) {
        const pos = getCharacterPosition(char.id);
        if (pos && pos.row === row && pos.col === col - 1) {
          leftCharResult = char;
          break;
        }
      }
    }

    // Find character at right position (col + 1)
    let rightCharResult = null;
    if (col < 12) {
      // Find character at (row, col+1)
      for (const char of charArr) {
        const pos = getCharacterPosition(char.id);
        if (pos && pos.row === row && pos.col === col + 1) {
          rightCharResult = char;
          break;
        }
      }
    }

    return {
      leftChar: leftCharResult,
      rightChar: rightCharResult,
    };
  }, [currentPosition]);

  // Build sets for quick lookup
  const disabledSet = useMemo(() => new Set(state.disabled), [state.disabled]);
  const playedSet = useMemo(() => new Set(state.played), [state.played]);
  const hiddenSet = useMemo(() => new Set(state.hidden), [state.hidden]);

  // Generate overlay rectangles for disabled/played characters
  const overlayRects = useMemo(() => {
    const rects: { charIndex: number; position: ReturnType<typeof getCharacterPosition>; type: 'disabled' | 'played' }[] = [];

    charArr.forEach((char, idx) => {
      // Skip hidden characters and the current character
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

  const containerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    margin: '0 auto',
  };

  const imageContainerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    paddingBottom: `${(IMAGE_HEIGHT / IMAGE_WIDTH) * 100}%`,
    border: '4px solid #000',
    boxShadow: '6px 6px 0px #000',
    overflow: 'hidden',
  };

  const imageStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  const svgOverlayStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  };

  const charSliderStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '15px',
    padding: '10px',
  };

  const mainCharImgStyle: CSSProperties = {
    width: '120px',
    height: '120px',
    objectFit: 'contain',
    border: '4px solid #000',
    boxShadow: '6px 6px 0px #000',
    background: '#2a2a4e',
  };

  const sideCharImgStyle: CSSProperties = {
    width: '60px',
    height: '60px',
    objectFit: 'contain',
    border: '3px solid #000',
    boxShadow: '4px 4px 0px #000',
    background: '#2a2a4e',
    opacity: 0.6,
  };

  return (
    <div style={containerStyle}>
      {/* Selection screen with overlay */}
      <div style={imageContainerStyle}>
        <img
          src={`${import.meta.env.BASE_URL || '/'}images/char-selection-screen.png`}
          alt="Character Selection Screen"
          style={imageStyle}
        />
        <svg
          style={svgOverlayStyle}
          viewBox={`0 0 ${IMAGE_WIDTH} ${IMAGE_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Pulse animation */}
            <style>
              {`
                @keyframes pulse {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.85; }
                }
                .highlight-rect {
                  animation: pulse 1.2s ease-in-out infinite;
                }
              `}
            </style>
          </defs>

          {/* Full width header label covering Solo Battle area */}
          <rect
            x={HEADER_AREA.x}
            y={HEADER_AREA.y}
            width={HEADER_AREA.width}
            height={HEADER_AREA.height}
            fill={COLORS.labelBg}
          />
          <text
            x={IMAGE_WIDTH / 2}
            y={HEADER_AREA.height / 2 + 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={COLORS.labelText}
            fontSize="28"
            fontWeight="800"
            fontFamily="monospace"
            letterSpacing="4"
          >
            FIND ON SELECTION SCREEN
          </text>

          {/* Disabled/Played character overlays */}
          {overlayRects.map(({ charIndex, position, type }) => (
            <rect
              key={charIndex}
              x={position!.x}
              y={position!.y}
              width={position!.width}
              height={position!.height}
              fill={type === 'disabled' ? COLORS.disabled : COLORS.played}
              stroke={COLORS.border}
              strokeWidth="1"
            />
          ))}

          {/* Current character highlight - neo-brutalism style with green border and yellow shadow */}
          {currentPosition && (
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
              />
              {/* Main green border (3px wider = 9px total) */}
              <rect
                x={currentPosition.x}
                y={currentPosition.y}
                width={currentPosition.width}
                height={currentPosition.height}
                fill="none"
                stroke={COLORS.highlightMain}
                strokeWidth="9"
                className="highlight-rect"
              />
            </>
          )}
        </svg>
      </div>

      {/* Character slider showing current char with grid neighbors */}
      <div style={charSliderStyle}>
        {/* Left neighbor on grid (smaller, left) */}
        {leftChar && (
          <img
            src={imigify(leftChar.name)}
            alt={leftChar.name}
            style={sideCharImgStyle}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        )}

        {/* Current character (larger, center) */}
        {currentChar && (
          <img
            src={imigify(currentChar.name)}
            alt={currentChar.name}
            style={mainCharImgStyle}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        )}

        {/* Right neighbor on grid (smaller, right) */}
        {rightChar && (
          <img
            src={imigify(rightChar.name)}
            alt={rightChar.name}
            style={sideCharImgStyle}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SelectionScreenOverlay;
