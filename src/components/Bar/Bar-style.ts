import { color, themeButtonStyle } from '../../layout/themeStyle'

export const buttonStyle: React.CSSProperties = {
  ...themeButtonStyle,
  width: '100%',
  backgroundColor: color.bgNavSecBtn,
}

export const navStyle: React.CSSProperties = {
  width: 'calc(100% - 20px)',
  padding: '10px',
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  backgroundColor: color.nav,
  position: 'fixed',
  height: 50,
  top: 0,
  alignItems: 'center',
}
