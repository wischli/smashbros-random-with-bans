import { color } from '../layout/themeStyle'

export const appStyle = (display: boolean): React.CSSProperties => {
  return {
    marginTop: 80,
    backgroundColor: color.bgContent,
    opacity: display ? 0.5 : 1,
  }
}
