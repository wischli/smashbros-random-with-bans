import { charArr } from '../../model/charArr/charArr';
import { IState } from '../../types/Types';
import { btnRowStyle, buttonStyle, cardStyle, cardTitleStyle, closeBtnStyle } from './Card-style';
import SelectionScreenOverlay from '../SelectionScreenOverlay/SelectionScreenOverlay';

interface CardProps {
  state: IState;
  handleNextClick: () => void;
  handlePrevClick: () => void;
  displayCard: boolean;
  handleDisplayClick: () => void;
}

const Card = ({
  state,
  handleNextClick,
  handlePrevClick,
  displayCard,
  handleDisplayClick,
}: CardProps) => {
  // Get current active character
  const character = charArr[state.enabled[0]];

  if (!displayCard || !character) {
    return null;
  }

  return (
    <div className="card" style={cardStyle(displayCard)}>
      <button
        type="button"
        style={closeBtnStyle}
        onClick={handleDisplayClick}
        className="close"
        aria-label="Close"
      />
      <h2 style={cardTitleStyle}>{character.name}</h2>
      <SelectionScreenOverlay
        state={state}
        currentCharIndex={state.enabled[0]}
      />
      <div style={btnRowStyle}>
        <button
          type="button"
          style={buttonStyle(true)}
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <button
          type="button"
          style={buttonStyle(false)}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Card;
