import { color } from '../../layout/themeStyle'

export const charsStyle: React.CSSProperties = {
  backgroundColor: '#486471',
  padding: window.innerWidth < 1000 ? 5 : 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexFlow: 'row wrap',
  alignContent: 'flex-end',
}

export const charRowStyle: React.CSSProperties = {
  paddingBottom: 10,
  paddingTop: 5,
  borderBottom: '1px solid white',
}

export const charRowTitleStyle: React.CSSProperties = {
  textAlign: 'center',
  textTransform: 'uppercase',
  color: 'white',
  margin: 5,
}

export const wrapperStyle: React.CSSProperties = {
  backgroundColor: color.background,
}
