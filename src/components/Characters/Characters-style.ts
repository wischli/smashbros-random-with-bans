import { color } from '../../layout/themeStyle'

export const charsStyle: React.CSSProperties = {
  backgroundColor: color.background,
  padding: window.innerWidth < 1000 ? 0 : 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexFlow: 'row wrap',
}

export const charRowStyle: React.CSSProperties = {
  paddingBottom: 20,
  paddingTop: 10,
}

export const charRowTitleStyle: React.CSSProperties = {
  textAlign: 'center',
  textTransform: 'uppercase',
  color: color.textLight,
  margin: 0,
  marginBottom: 15,
  padding: '12px 20px',
  fontWeight: 700,
  fontSize: '16px',
  letterSpacing: '2px',
  fontFamily: "'Space Mono', monospace",
  background: color.nav,
  border: '3px solid #fff',
  boxShadow: '4px 4px 0px #fff',
}

export const wrapperStyle: React.CSSProperties = {
  backgroundColor: color.background,
  minHeight: '100vh',
}
