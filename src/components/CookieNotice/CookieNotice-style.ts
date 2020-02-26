import { color, themeButtonStyle } from '../../layout/themeStyle'

export const noticeStyle = (display: boolean): React.CSSProperties => {
  return {
    bottom: 0,
    backgroundColor: color.bgCookieNotice,
    color: 'white',
    width: '100%',
    display: display ? 'block' : 'none',
    zIndex: 1,
    position: 'fixed',
  }
}

export const messageStyle = (display: boolean): React.CSSProperties => {
  return {
    padding: 10,
    display: display ? 'flex' : 'none',
    alignItems: 'center',
    maxWidth: '100%',
    justifyContent: window.innerWidth < 800 ? 'center' : 'space-evenly',
  }
}

export const buttonStyle: React.CSSProperties = {
  ...themeButtonStyle,
  minWidth: 100,
}
