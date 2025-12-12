import { useState } from 'react';
import { themeButtonStyle } from '../../layout/themeStyle';
import { buttonStyle, navStyle } from './Bar-style';
import { IState } from '../../types/Types';

interface BarProps {
  state: IState;
  handleRandomizeClick: () => void;
  handleEchoClick: () => void;
  handleResetClick: () => void;
  handleSelectionScreenToggle: () => void;
  isRandomized: boolean;
  options: { echo: boolean };
  showSelectionScreen: boolean;
}

const Bar = ({
  handleRandomizeClick,
  handleEchoClick,
  handleResetClick,
  handleSelectionScreenToggle,
  isRandomized,
  options,
  showSelectionScreen,
}: BarProps) => {
  const [isRandomizing, setIsRandomizing] = useState(false);

  const onRandomizeClick = () => {
    setIsRandomizing(true);
    setTimeout(() => {
      handleRandomizeClick();
      setIsRandomizing(false);
    }, 600);
  };
  // Disable echo toggle once randomization has started
  const echoButtonDisabled = isRandomized;

  // View toggle button styling - different background for active view
  const viewButtonStyle = (isActive: boolean): React.CSSProperties => ({
    ...buttonStyle,
    backgroundColor: isActive ? '#51cf66' : '#ffffff',
    color: '#000000',
  });

  return (
    <div className="nav" style={navStyle}>
      <button
        type="button"
        className="neo-btn"
        style={{
          ...buttonStyle,
          opacity: echoButtonDisabled ? 0.5 : 1,
          cursor: echoButtonDisabled ? 'not-allowed' : 'pointer',
        }}
        onClick={echoButtonDisabled ? undefined : handleEchoClick}
        disabled={echoButtonDisabled}
      >
        {options.echo ? 'Hide Echoes' : 'Show Echoes'}
      </button>
      <button
        type="button"
        className="neo-btn"
        style={viewButtonStyle(!showSelectionScreen)}
        onClick={showSelectionScreen ? handleSelectionScreenToggle : undefined}
        disabled={!showSelectionScreen}
      >
        Grid
      </button>
      <button
        type="button"
        className="neo-btn"
        style={viewButtonStyle(showSelectionScreen)}
        onClick={!showSelectionScreen ? handleSelectionScreenToggle : undefined}
        disabled={showSelectionScreen}
      >
        Screen
      </button>
      <button
        type="button"
        className={`neo-btn ${isRandomizing ? 'randomizing' : ''}`}
        style={{
          ...themeButtonStyle,
          width: '100%',
          opacity: isRandomized ? 0.5 : 1,
          cursor: isRandomized || isRandomizing ? 'not-allowed' : 'pointer',
        }}
        data-testid="centerBtn"
        onClick={isRandomized || isRandomizing ? undefined : onRandomizeClick}
        disabled={isRandomized || isRandomizing}
      >
        Randomize
      </button>
      <button type="button" className="neo-btn" style={buttonStyle} onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};

export default Bar;
