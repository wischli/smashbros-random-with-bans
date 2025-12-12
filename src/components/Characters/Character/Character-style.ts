import { IState } from '../../../types/Types'
import { color } from '../../../layout/themeStyle'

export const bgColor = {
  enabled: color.charEnabled,
  disabled: color.charDisabled,
  played: color.charPlayed,
  hidden: color.charHidden,
}

export const charStyle = (charState: keyof IState): React.CSSProperties => {
  const size = window.innerWidth < 1000 ? 55 : 75;
  return {
    width: size,
    height: size,
    backgroundColor: bgColor[charState],
    border: '3px solid #000',
    boxShadow: '4px 4px 0px #000',
    display: 'block',
    cursor: 'pointer',
    overflow: 'hidden',
  }
}

export const imageStyle = (charState: keyof IState): React.CSSProperties => {
  const size = window.innerWidth < 1000 ? 55 : 75;
  return {
    opacity: charState === 'enabled' ? 1 : 0.6,
    display: 'block',
    width: size,
    height: size,
    objectFit: 'cover',
  }
}
