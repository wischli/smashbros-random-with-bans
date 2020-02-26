/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-env jest */

import { ICState } from '../types/Types'
import { Reducer } from './Reducer'
import { charArr } from '../model/charArr/charArr'
import { Action } from '../types/Actions'
import { setTestState, setCorrectState } from './Reducer.test-utils'

let charIds: number[]
beforeEach(() => {
  charIds = [...charArr].map((_, index) => index)
})

describe('Testing reducer functionality', () => {
  describe('Action: Next', () => {
    it('Should add character to played', () => {
      const testIndices = [charIds[0]]
      const { complement, testState } = setTestState({
        charIds,
        action: Action.next,
        indices: testIndices,
        fromKey: 'enabled',
      })
      expect(complement).toBeDefined()
      const correctState = setCorrectState('enabled', complement!, 'played', testIndices)
      expect(testState).toMatchObject(correctState)
    })

    it('Should re-shuffle when all characters have been played', () => {
      const testIndices = charIds.slice(0, charArr.length - 1)
      const { testState } = setTestState({
        charIds,
        action: Action.next,
        fromKey: 'played',
        indices: testIndices,
      })
      expect(testState).toBeDefined()
      expect(testState).toHaveProperty('enabled')
      expect(testState!.enabled).toHaveLength(charIds.length)
    })

    it('Should re-shuffle after all characters have been played', () => {
      const { initialState } = setTestState({ charIds })
      const reducerState = initialState.enabled.slice(0, charIds.length - 1).reduce(
        newState => {
          return Reducer(newState, { type: Action.next })
        },
        { ...initialState },
      )
      expect(reducerState.played).toHaveLength(charIds.length - 1)
      const mimicInitialState = Reducer(reducerState, { type: Action.next })
      expect(mimicInitialState.enabled).toHaveLength(charIds.length)
    })
  })

  describe('Action: Previous', () => {
    it('Should re-add player to head of enabled', () => {
      const testIndices = [charIds[0]]
      const { testState } = setTestState({
        charIds,
        action: Action.previous,
        indices: testIndices,
        fromKey: 'played',
        indiceKey: 'enabled',
      })
      expect(testState).toBeDefined()
      const correctState = setCorrectState('enabled', charIds, 'played', [])
      expect(testState!).toMatchObject(correctState)
    })

    it('Should return state since no previous character existent', () => {
      const { testState } = setTestState({
        charIds,
        action: Action.previous,
        indices: charIds,
        fromKey: 'enabled',
      })
      expect(testState).toBeDefined()
      const correctState = setCorrectState('enabled', charIds, 'played', [])
      expect(testState!).toMatchObject(correctState)
    })
  })

  describe('Action: toggleChar', () => {
    it('Should disable second character', () => {
      const charIndex = charIds[1]
      const { complement, testState } = setTestState({
        charIds,
        action: Action.toggleChar,
        payload: { charIndex, charState: 'enabled' },
        indices: [charIndex],
        fromKey: 'enabled',
      })
      expect(testState).toBeDefined()
      expect(complement).toHaveLength(charIds.length - 1)
      const correctState = setCorrectState('enabled', complement!, 'disabled', [charIndex])
      expect(testState!).toMatchObject(correctState)
    })
    it('Should re-enable disabled character', () => {
      const charIndex = charIds[1]
      const { complement, testState } = setTestState({
        charIds,
        action: Action.toggleChar,
        payload: { charIndex, charState: 'disabled' },
        indices: [charIndex],
        fromKey: 'disabled',
        indiceKey: 'enabled',
      })
      expect(testState).toBeDefined()
      expect(complement).toHaveLength(charIds.length - 1)
      const correctState = setCorrectState('enabled', [...complement!, charIndex], 'disabled', [])
      expect(testState!).toMatchObject(correctState)
    })
    it('Should not change state', () => {
      const charIndex = charIds[1]
      const { initialState, complement, testState } = setTestState({
        charIds,
        action: Action.toggleChar,
        payload: { charIndex, charState: 'played' },
        indices: [charIndex],
        fromKey: 'played',
        indiceKey: 'enabled',
      })
      expect(testState).toBeDefined()
      expect(complement).toHaveLength(charIds.length - 1)
      expect(testState!).toMatchObject(initialState)
    })
  })

  describe('Action: restore', () => {
    it('Should validate cookie', () => {
      try {
        const cookie: ICState = JSON.parse(`{"enabled":[${charIds.join(',')}],"played":[],"disabled":[],"hidden":[],"date":"2019-08-01T09:18:23.478Z"}`)
        const { initialState: correctState, testState: restoredState } = setTestState({
          charIds,
          action: Action.restore,
          payload: { cookieState: cookie },
        })
        expect(correctState.enabled).toHaveLength(charIds.length)
        expect(restoredState).toBeDefined()
        expect(correctState).toMatchObject(restoredState!)
      } catch (error) {
        return undefined
      }
      return undefined
    })
    describe('Should invalidate cookie data', () => {
      try {
        const cookie: ICState = JSON.parse(`{"enabled":[${charIds.join(',')}],"played":[],"disabled":[],"hidden":[],"date":"invalid-date"}`)
        it('Invalid date', () => {
          expect(Number.isNaN(Date.parse(cookie.date))).toEqual(true)
        })

        it('Invalid cookie', () => {
          const { initialState: correctState, testState: restoredState } = setTestState({
            charIds,
            action: Action.restore,
            payload: { cookieState: cookie },
          })
          expect(restoredState).toBeDefined()
          expect(correctState).toMatchObject(restoredState!)
        })
      } catch (error) {
        expect(error).toBeDefined()
      }
    })
  })
})
