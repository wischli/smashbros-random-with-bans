import { IState } from '../types/Types'
import { randomize } from '../utils'

// reset played characters and shuffle (keeps disabled/hidden intact)
export const resetPlayed = (inputState: IState) => {
  const state = { ...inputState }
  // Combine enabled and played, then shuffle
  state.enabled = randomize([...inputState.enabled, ...inputState.played])
  state.played = []
  return state
}
