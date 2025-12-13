import { helpItems } from './helpContent';
import HelpAnnotation from './HelpAnnotation';
import { HelpContext } from './types';
import {
  helpOverlayStyle,
  helpContentStyle,
  helpHeaderStyle,
  helpTitleStyle,
  helpSubtitleStyle,
  helpGridStyle,
  helpFooterStyle,
  closeButtonStyle,
} from './HelpOverlay-style';

interface HelpOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  isRandomized: boolean;
  showSelectionScreen: boolean;
  options: { echo: boolean };
  hasPlayedChars: boolean;
  hasDisabledChars: boolean;
}

const HelpOverlay = ({
  isOpen,
  onClose,
  isRandomized,
  showSelectionScreen,
  options,
  hasPlayedChars,
  hasDisabledChars,
}: HelpOverlayProps) => {
  if (!isOpen) return null;

  const context: HelpContext = {
    isRandomized,
    showSelectionScreen,
    echoEnabled: options.echo,
    hasPlayedChars,
    hasDisabledChars,
  };

  return (
    <div
      style={helpOverlayStyle}
      onClick={onClose}
      className="help-overlay"
    >
      <div
        style={helpContentStyle}
        onClick={(e) => e.stopPropagation()}
        className="help-content"
      >
        <div style={helpHeaderStyle}>
          <h1 style={helpTitleStyle}>How to Use</h1>
          <p style={helpSubtitleStyle}>Press F1 or ? anytime to toggle this help</p>
        </div>
        <div style={helpGridStyle}>
          {helpItems.map((item) => (
            <HelpAnnotation key={item.id} item={item} context={context} />
          ))}
        </div>
        <div style={helpFooterStyle}>
          <button
            type="button"
            className="neo-btn"
            style={closeButtonStyle}
            onClick={onClose}
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpOverlay;
