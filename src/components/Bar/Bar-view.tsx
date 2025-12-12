import { useState } from 'react';
import { themeButtonStyle } from '../../layout/themeStyle';
import { buttonStyle, navStyle } from './Bar-style';
import { IState } from '../../types/Types';

interface BarProps {
  state: IState;
  handleRandomizeClick: () => void;
  handleEchoClick: () => void;
  handleResetClick: () => void;
  handleResetPlayedClick: () => void;
  handleNextClick: () => void;
  handleSelectionScreenToggle: () => void;
  isRandomized: boolean;
  options: { echo: boolean };
  showSelectionScreen: boolean;
}

const Bar = ({
  handleRandomizeClick,
  handleEchoClick,
  handleResetClick,
  handleResetPlayedClick,
  handleNextClick,
  handleSelectionScreenToggle,
  isRandomized,
  options,
  showSelectionScreen,
}: BarProps) => {
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const onRandomizeClick = () => {
    setIsRandomizing(true);
    setTimeout(() => {
      handleRandomizeClick();
      setIsRandomizing(false);
    }, 600);
  };

  // Settings menu styles
  const settingsMenuStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    marginTop: 8,
    backgroundColor: '#ffffff',
    border: '3px solid #000',
    boxShadow: '4px 4px 0px #000',
    zIndex: 1001,
    minWidth: 180,
  };

  const settingsItemStyle: React.CSSProperties = {
    padding: '12px 16px',
    fontSize: '13px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    cursor: 'pointer',
    borderBottom: '2px solid #000',
    fontFamily: "'Space Mono', monospace",
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  };

  // Disable echo toggle once randomization has started
  const echoButtonDisabled = isRandomized;

  // View toggle shows current view and indicates switchability
  const viewToggleStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#ffffff',
    color: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  };

  // Primary action button changes based on state
  const primaryButtonStyle: React.CSSProperties = {
    ...themeButtonStyle,
    width: '100%',
    backgroundColor: '#51cf66',
    cursor: isRandomizing ? 'not-allowed' : 'pointer',
  };

  return (
    <div className="nav" style={navStyle}>
      {/* Settings Button */}
      <div style={{ position: 'relative' }}>
        <button
          type="button"
          className="neo-btn"
          style={{
            ...buttonStyle,
            width: 45,
            padding: 0,
            fontSize: 24,
          }}
          onClick={() => setShowSettings(!showSettings)}
          aria-label="Settings"
        >
          ⚙
        </button>
        {showSettings && (
          <div style={settingsMenuStyle}>
            <div
              style={{
                ...settingsItemStyle,
                opacity: echoButtonDisabled ? 0.5 : 1,
                cursor: echoButtonDisabled ? 'not-allowed' : 'pointer',
              }}
              onClick={() => {
                if (!echoButtonDisabled) {
                  handleEchoClick();
                }
              }}
            >
              <span style={{ width: 16 }}>{options.echo ? '✓' : ''}</span>
              Show Echoes
            </div>
            <div
              style={{
                ...settingsItemStyle,
                opacity: isRandomized ? 1 : 0.5,
                cursor: isRandomized ? 'pointer' : 'not-allowed',
                color: '#51cf66',
              }}
              onClick={() => {
                if (isRandomized) {
                  handleResetPlayedClick();
                  setShowSettings(false);
                }
              }}
            >
              <span style={{ width: 16 }}>↻</span>
              Reset Played
            </div>
            <div
              style={{
                ...settingsItemStyle,
                borderBottom: 'none',
                color: '#ff6b6b',
              }}
              onClick={() => {
                handleResetClick();
                setShowSettings(false);
              }}
            >
              <span style={{ width: 16 }}>⟲</span>
              Reset All
            </div>
          </div>
        )}
      </div>

      {/* View Toggle - Single button */}
      <button
        type="button"
        className="neo-btn"
        style={viewToggleStyle}
        onClick={handleSelectionScreenToggle}
      >
        <span>{showSelectionScreen ? 'Screen' : 'Grid'}</span>
        <span style={{ fontSize: 16 }}>⇄</span>
      </button>

      {/* Primary Action - Randomize or Next Player */}
      <button
        type="button"
        className={`neo-btn ${isRandomizing ? 'randomizing' : ''}`}
        style={primaryButtonStyle}
        data-testid="centerBtn"
        onClick={isRandomizing ? undefined : (isRandomized ? handleNextClick : onRandomizeClick)}
        disabled={isRandomizing}
      >
        {isRandomized ? 'Next Player' : 'Randomize'}
      </button>

      {/* Click outside to close settings */}
      {showSettings && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
          }}
          onClick={() => setShowSettings(false)}
        />
      )}
    </div>
  );
};

export default Bar;
