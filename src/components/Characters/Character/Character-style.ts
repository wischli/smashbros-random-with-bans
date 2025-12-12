import { IState } from '../../../types/Types'

// Overlay colors for character states
export const overlayColor = {
  enabled: 'transparent',
  disabled: 'rgba(255, 60, 60, 0.6)',  // Red overlay (banned)
  played: 'rgba(80, 80, 80, 0.7)',     // Grey overlay (already played)
  hidden: 'rgba(255, 60, 60, 0.35)',   // Faded red overlay (hidden/banned)
}

export const charStyle = (_charState: keyof IState): React.CSSProperties => {
  const size = window.innerWidth < 1000 ? 55 : 75;
  return {
    position: 'relative',
    width: size,
    height: size,
    backgroundColor: '#ffffff',
    border: '3px solid #000',
    boxShadow: '4px 4px 0px #000',
    display: 'block',
    cursor: 'pointer',
    overflow: 'hidden',
  }
}

export const imageStyle = (): React.CSSProperties => {
  const size = window.innerWidth < 1000 ? 55 : 75;
  return {
    display: 'block',
    width: size,
    height: size,
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
