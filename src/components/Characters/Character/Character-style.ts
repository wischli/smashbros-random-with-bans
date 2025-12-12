import { IState } from '../../../types/Types'

// Fixed cell size matching the grid
const CELL_SIZE = 75;

// Overlay colors for character states
export const overlayColor = {
  enabled: 'transparent',
  disabled: 'rgba(255, 60, 60, 0.6)',  // Red overlay (banned)
  played: 'rgba(80, 80, 80, 0.7)',     // Grey overlay (already played)
  hidden: 'rgba(255, 60, 60, 0.35)',   // Faded red overlay (hidden/banned)
}

export const charStyle = (_charState: keyof IState): React.CSSProperties => {
  return {
    position: 'relative',
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: '#ffffff',
    border: '3px solid #000',
    boxShadow: '4px 4px 0px #000',
    display: 'block',
    cursor: 'pointer',
    overflow: 'hidden',
    flexShrink: 0,
  }
}

export const imageStyle = (): React.CSSProperties => {
  return {
    display: 'block',
    width: CELL_SIZE,
    height: CELL_SIZE,
    objectFit: 'cover',
  }
}

export const overlayStyle = (charState: keyof IState): React.CSSProperties => {
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: overlayColor[charState],
    pointerEvents: 'none',
  }
}

export const nameStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: '#fff',
  fontSize: '10px',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '1px 0',
  textTransform: 'uppercase',
  letterSpacing: '0.8px',
  pointerEvents: 'none',
  boxSizing: 'border-box',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}

// Green highlight border for current randomized character
export const currentHighlightStyle: React.CSSProperties = {
  position: 'absolute',
  top: -6,
  left: -6,
  right: -6,
  bottom: -6,
  border: '12px solid #00ff00',
  pointerEvents: 'none',
  zIndex: 10,
}
