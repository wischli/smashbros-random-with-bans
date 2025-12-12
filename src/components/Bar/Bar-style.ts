import { color, themeButtonStyle } from '../../layout/themeStyle'

export const buttonStyle: React.CSSProperties = {
  ...themeButtonStyle,
  width: '100%',
  padding: '0 15px',
}

export const navStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 20px',
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  gap: '15px',
  backgroundColor: color.nav,
  position: 'fixed',
  height: 60,
  top: 0,
  alignItems: 'center',
  borderBottom: '4px solid #fff',
  boxSizing: 'border-box',
  zIndex: 1000,
}
