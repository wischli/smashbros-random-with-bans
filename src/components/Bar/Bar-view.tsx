import React from 'react';
import { themeButtonStyle } from '../../layout/themeStyle';
import { saveCharacters } from '../../utils';
import { buttonStyle, navStyle } from './Bar-style';
import { IState } from '../../types/Types';

const Bar = (props: {
  state: IState;
  displayCard: boolean;
  handleRandomizeClick: Function;
  handleDisplayClick: Function;
  handleEchoClick: Function;
  displayRandomize: boolean;
  options: { echo: boolean };
}) => {
  const { state, displayCard, handleRandomizeClick, handleDisplayClick, handleEchoClick, displayRandomize, options } = props;

  // set center button message and action
  let centerBtn: {
    action: Function;
    msg: string;
  };
  if (displayCard) {
    centerBtn = {
      action: () => handleDisplayClick(displayCard),
      msg: 'Close Popup',
    };
  } else if (displayRandomize) {
    centerBtn = {
      action: () => handleDisplayClick(!displayCard),
      msg: 'Show Popup',
    };
  } else {
    centerBtn = {
      action: () => handleRandomizeClick(),
      msg: 'Randomize',
    };
  }

  return (
    <div className="nav" style={navStyle}>
      <button type="button" style={buttonStyle} onClick={() => handleEchoClick()}>
        {options.echo ? 'Hide Echoes' : 'Show Echoes'}
      </button>
      <button type="button" style={{ ...themeButtonStyle, width: '100%' }} data-test="centerBtn" onClick={() => centerBtn.action()}>
        {centerBtn.msg}
      </button>
      <button type="button" style={buttonStyle} onClick={() => saveCharacters(state)}>
        {'Save Chars'}
      </button>
    </div>
  );
};
export default Bar;
