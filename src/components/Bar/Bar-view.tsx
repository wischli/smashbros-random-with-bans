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
      {!isRandomized ? (
        <button
          type="button"
          className="neo-btn"
          style={{ ...themeButtonStyle, width: '100%' }}
          data-testid="centerBtn"
          onClick={handleRandomizeClick}
        >
          Randomize
        </button>
      ) : (
        <div style={{ width: '100%' }} /> // Spacer when randomized
      )}
      <button type="button" className="neo-btn" style={buttonStyle} onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};

export default Bar;
