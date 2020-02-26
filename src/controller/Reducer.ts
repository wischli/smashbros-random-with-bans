import { IChar, IState, ICState } from '../types/Types'
import { Action } from '../types/Actions'
import { charArr, initialCharState } from '../model/charArr/charArr'
import { resetPlayed } from './Reducer-utils'
import { randomize } from '../utils'

export const Reducer = (inputState: IState, action: { type: Action; cookieState?: ICState; charIndex?: number; charState?: keyof IState }): IState => {
  // create deep clone of state
  const state = { enabled: [...inputState.enabled], played: [...inputState.played], hidden: [...inputState.hidden], disabled: [...inputState.disabled] }

  switch (action.type) {
    case Action.next: {
      if (state.enabled.length > 1) {
        const char = state.enabled.shift()
        state.played.push(char as number)
        return state
      }
      return resetPlayed(state)
    }
    case Action.previous: {
      if (state.played.length > 0) {
        const char = state.played.pop()
        state.enabled.unshift(char as number)
      }
      return state
    }
    case Action.randomize: {
      const { played, disabled, hidden } = state
      const newState: IState = state.enabled.reduce(
        (rState: IState, cIndex: number) => {
          const char: IChar = charArr[cIndex]
          if (!char.enabled) {
            rState.disabled.push(cIndex)
          } else if (!char.display) {
            rState.hidden.push(cIndex)
          } else if (char.played) {
            rState.played.push(cIndex)
          } else {
            rState.enabled.push(cIndex)
          }
          return rState
        },
        { enabled: [], played, disabled, hidden },
      )
      newState.enabled = randomize(newState.enabled)
      return newState
    }
    case Action.echo: {
      switch (state.hidden.length) {
        case 0: {
          const { played, disabled } = state
          return state.enabled.reduce(
            (rState: IState, cIndex: number) => {
              const char = charArr[cIndex]
              if (char.echo.length && char.echo[0] % 1 === 0) {
                rState.hidden.push(cIndex)
              } else {
                rState.enabled.push(cIndex)
              }
              return rState
            },
            { enabled: [], played, disabled, hidden: [] },
          )
        }
        default: {
          const { enabled, played, disabled } = state
          // TODO: enable played, enabled copy from echo char
          return state.hidden.reduce(
            (rState: IState, cIndex: number) => {
              rState.enabled.push(cIndex)
              return rState
            },
            { enabled, played, disabled, hidden: [] },
          )
        }
      }
    }
    case Action.toggleChar: {
      if (!action.charIndex && action.charIndex !== 0) {
        throw new Error(`Missing character index input for "toggleChar" reducer action`)
      }
      if (!action.charState) {
        throw new Error(`Missing character state key input for "toggleChar" reducer action`)
      }
      const { charIndex, charState } = action
      if (charState === 'played') {
        return state
      }
      if (charState !== 'hidden') {
        const targetKey: keyof IState = charState === 'disabled' ? 'enabled' : 'disabled'
        const index = state[charState].indexOf(charIndex)
        state[charState].splice(index, 1)
        state[targetKey].push(charIndex)
      }
      return state
    }
    case Action.restore: {
      if (!action.cookieState) {
        throw new Error(`Unable to restore state for missing cookieState`)
      }
      const { enabled, played, disabled, hidden }: ICState = action.cookieState
      if (enabled.length + played.length + disabled.length + hidden.length === charArr.length) {
        return { enabled, played, disabled, hidden }
      }
      return state
    }
    case Action.reset:
      return initialCharState
    default:
      throw new Error(`Unhandled Reducer action "${action}"`)
  }
}
