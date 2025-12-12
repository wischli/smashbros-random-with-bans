import { themeButtonStyle } from '../../layout/themeStyle';
import { buttonStyle, navStyle } from './Bar-style';
import { IState } from '../../types/Types';

interface BarProps {
  state: IState;
  displayCard: boolean;
  handleRandomizeClick: () => void;
  handleDisplayClick: () => void;
  handleEchoClick: () => void;
  handleResetClick: () => void;
  displayRandomize: boolean;
  options: { echo: boolean };
}

const Bar = ({
  displayCard,
  handleRandomizeClick,
  handleDisplayClick,
  handleEchoClick,
  handleResetClick,
  displayRandomize,
  options,
}: BarProps) => {
  // Set center button message and action
  let centerBtn: {
    action: () => void;
    msg: string;
  };

  if (displayCard) {
    centerBtn = {
      action: handleDisplayClick,
      msg: 'Close Popup',
    };
  } else if (displayRandomize) {
    centerBtn = {
      action: handleDisplayClick,
      msg: 'Show Popup',
    };
  } else {
    centerBtn = {
      action: handleRandomizeClick,
      msg: 'Randomize',
    };
  }

  // Disable echo toggle once randomization has started
  const echoButtonDisabled = displayRandomize;

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
        style={{ ...themeButtonStyle, width: '100%' }}
        data-testid="centerBtn"
        onClick={centerBtn.action}
      >
        {centerBtn.msg}
      </button>
      <button type="button" className="neo-btn" style={buttonStyle} onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};

export default Bar;
