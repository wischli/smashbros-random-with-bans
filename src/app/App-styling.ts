import { color } from '../layout/themeStyle'

export const appStyle = (display: boolean): React.CSSProperties => {
  return {
    marginTop: 80,
    minHeight: '100vh',
    backgroundColor: color.bgContent,
    opacity: display ? 0.5 : 1,
  }
}
