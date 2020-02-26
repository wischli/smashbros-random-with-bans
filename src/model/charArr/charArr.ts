import { IChar, IState } from '../../types/Types'
import { characters } from './characters'
import { imigify } from '../../utils'

export const charArr: IChar[] = characters.map(char => ({
  ...char,
  media: imigify(char.name),
  enabled: true,
  played: false,
  display: true,
}))

export const initialCharState: IState = { enabled: charArr.map((_, index) => index), played: [], disabled: [], hidden: [] }
