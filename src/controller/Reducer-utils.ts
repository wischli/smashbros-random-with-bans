import { IState } from '../types/Types'
import { randomize } from '../utils'

// reset played characters and shuffle
export const resetPlayed = (inputState: IState) => {
  const state = { ...inputState }
  state.enabled = randomize(
    [...inputState.enabled, ...inputState.played].map((_, charIndex: number) => {
      return charIndex
    }),
  )
  state.played = []
  return state
}
