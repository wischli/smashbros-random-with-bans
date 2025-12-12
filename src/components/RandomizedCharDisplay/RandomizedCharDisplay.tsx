import { CSSProperties, useMemo } from 'react';
import { charArr } from '../../model/charArr/charArr';
import { getCharacterPosition } from '../../model/charArr/selectionScreenPositions';
import { IState, IChar } from '../../types/Types';
import { imigify } from '../../utils';

interface RandomizedCharDisplayProps {
  state: IState;
  handleNextClick: () => void;
  handlePrevClick: () => void;
}

const RandomizedCharDisplay = ({
  state,
  handleNextClick,
  handlePrevClick,
}: RandomizedCharDisplayProps) => {
  // Get the current character (first enabled)
  const currentCharIndex = state.enabled[0];
  const currentChar = currentCharIndex !== undefined ? charArr[currentCharIndex] : null;
  const currentPosition = currentChar ? getCharacterPosition(currentChar.id) : null;

  // Get left and right neighbors based on grid position
  const { leftChar, rightChar } = useMemo(() => {
    if (!currentPosition) return { leftChar: null, rightChar: null };

    const { row, col } = currentPosition;

    let leftCharResult: IChar | null = null;
    if (col > 0) {
      for (const char of charArr) {
        const pos = getCharacterPosition(char.id);
        if (pos && pos.row === row && pos.col === col - 1) {
          leftCharResult = char;
          break;
        }
      }
    }

    let rightCharResult: IChar | null = null;
    if (col < 12) {
      for (const char of charArr) {
        const pos = getCharacterPosition(char.id);
        if (pos && pos.row === row && pos.col === col + 1) {
          rightCharResult = char;
          break;
        }
      }
    }

    return { leftChar: leftCharResult, rightChar: rightCharResult };
  }, [currentPosition]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  // Outer wrapper for centering and padding
  const wrapperStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    padding: isMobile ? '15px 10px' : '20px',
    backgroundColor: '#1a1a2e',
  };

  // Popup-like container with border and shadow
  const popupStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#1a1a2e',
    border: '4px solid #000',
    boxShadow: '8px 8px 0px #000',
    maxWidth: isMobile ? '320px' : '400px',
    width: '100%',
  };

  // Header with black background for the name
  const headerStyle: CSSProperties = {
    backgroundColor: '#000000',
    padding: isMobile ? '12px 15px' : '15px 20px',
    textAlign: 'center',
  };

  const charNameStyle: CSSProperties = {
    fontSize: isMobile ? '18px' : '24px',
    fontWeight: 800,
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontFamily: "'Space Mono', monospace",
    margin: 0,
  };

  // Content area
  const contentStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: isMobile ? '15px' : '20px',
  };

  const charSliderStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    padding: '10px 0',
  };

  const mainCharImgStyle: CSSProperties = {
    width: isMobile ? '80px' : '120px',
    height: isMobile ? '80px' : '120px',
    objectFit: 'contain',
    border: '4px solid #000',
    boxShadow: '6px 6px 0px #000',
    background: '#2a2a4e',
    borderRadius: '50%',
  };

  const sideCharImgStyle: CSSProperties = {
    width: isMobile ? '40px' : '60px',
    height: isMobile ? '40px' : '60px',
    objectFit: 'contain',
    border: '3px solid #000',
    boxShadow: '4px 4px 0px #000',
    background: '#2a2a4e',
    opacity: 0.6,
    borderRadius: '50%',
  };

  const btnRowStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '15px',
    width: '100%',
  };

  const navButtonStyle = (isLeft: boolean): CSSProperties => ({
    flex: 1,
    maxWidth: isMobile ? '120px' : '150px',
    height: '50px',
    fontSize: '14px',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    cursor: 'pointer',
    border: '3px solid #000',
    boxShadow: '4px 4px 0px #000',
    transition: 'all 0.1s ease',
    color: '#000',
    backgroundColor: isLeft ? '#ff6b6b' : '#51cf66',
    fontFamily: "'Space Mono', monospace",
  });

  if (!currentChar) return null;

  return (
    <div style={wrapperStyle}>
      <div style={popupStyle}>
        <div style={headerStyle}>
          <div style={charNameStyle}>{currentChar.name}</div>
        </div>
        <div style={contentStyle}>
          <div style={charSliderStyle}>
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

            <img
              src={imigify(currentChar.name)}
              alt={currentChar.name}
              style={mainCharImgStyle}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />

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

          <div style={btnRowStyle}>
            <button
              type="button"
              className="neo-btn"
              style={navButtonStyle(true)}
              onClick={handlePrevClick}
            >
              Prev
            </button>
            <button
              type="button"
              className="neo-btn"
              style={navButtonStyle(false)}
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomizedCharDisplay;
