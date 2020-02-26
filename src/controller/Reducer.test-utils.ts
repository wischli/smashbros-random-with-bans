import { IState, ICState } from '../types/Types'
import { Action } from '../types/Actions'
import { Reducer } from './Reducer'

// either return intitialState or derive testState for action and payload input
export function setTestState ({
  charIds,
  action,
  payload,
  indices,
  fromKey = 'enabled',
  indiceKey,
}: {
  charIds: number[]
  fromKey?: keyof IState
  indices?: number[]
  action?: Action
  payload?: { cookieState?: ICState; charIndex?: number; charState?: keyof IState }
  indiceKey?: keyof IState
}): { initialState: IState; complement?: number[]; testState?: IState } {
  let complement
  let testState
  if (indices) {
    complement = charIds.filter(charId => !indices.includes(charId))
  }
  const initialState: IState = {
    enabled: [],
    played: [],
    disabled: [],
    hidden: [],
    [fromKey]: indices && indiceKey ? [...indices] : [...charIds],
  }
  if (indiceKey && complement) {
    initialState[indiceKey] = [...complement]
  }
  if (action) {
    testState = Reducer(initialState, { type: action, ...payload })
  }
  return {
    initialState,
    testState,
    complement,
  }
}

// sets correct test state for given from and to data
export function setCorrectState (fromKey: keyof IState, fromData: number[], toKey: keyof IState, toData: number[]): IState {
  if (fromKey === toKey) {
    throw new Error('Source and target key cannot be the same')
  }
  return {
    enabled: [],
    played: [],
    disabled: [],
    hidden: [],
    [fromKey]: [...fromData],
    [toKey]: [...toData],
  }
}
