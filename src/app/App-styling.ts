import { color } from '../layout/themeStyle'

export const appStyle = (display: boolean): React.CSSProperties => {
  return {
    marginTop: 70,
    height: '100vh',
    backgroundColor: color.bgContent,
    opacity: display ? 0.5 : 1,
  }
}
