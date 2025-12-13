import { describe, it, expect, beforeEach } from 'vitest';
import { ICState } from '../types/Types';
import { Reducer } from './Reducer';
import { charArr } from '../model/charArr/charArr';
import { Action } from '../types/Actions';
import { setTestState, setCorrectState } from './Reducer.test-utils';

let charIds: number[];
beforeEach(() => {
  charIds = [...charArr].map((_, index) => index);
});

describe('Testing reducer functionality', () => {
  describe('Action: Next', () => {
    it('Should add character to played', () => {
      const testIndices = [charIds[0]];
      const { complement, testState } = setTestState({
        charIds,
        action: Action.next,
        indices: testIndices,
        fromKey: 'enabled',
      });
      expect(complement).toBeDefined();
      const correctState = setCorrectState('enabled', complement!, 'played', testIndices);
      expect(testState).toMatchObject(correctState);
    });

    it('Should re-shuffle when all characters have been played', () => {
      const testIndices = charIds.slice(0, charArr.length - 1);
      const { testState } = setTestState({
        charIds,
        action: Action.next,
        fromKey: 'played',
        indices: testIndices,
      });
      expect(testState).toBeDefined();
      expect(testState).toHaveProperty('enabled');
      expect(testState!.enabled).toHaveLength(charIds.length);
    });

    it('Should re-shuffle after all characters have been played', () => {
      const { initialState } = setTestState({ charIds });
      const reducerState = initialState.enabled.slice(0, charIds.length - 1).reduce(
        (newState) => {
          return Reducer(newState, { type: Action.next });
        },
        { ...initialState }
      );
      expect(reducerState.played).toHaveLength(charIds.length - 1);
      const mimicInitialState = Reducer(reducerState, { type: Action.next });
      expect(mimicInitialState.enabled).toHaveLength(charIds.length);
    });
  });

  describe('Action: Previous', () => {
    it('Should re-add player to head of enabled', () => {
      const testIndices = [charIds[0]];
      const { testState } = setTestState({
        charIds,
        action: Action.previous,
        indices: testIndices,
        fromKey: 'played',
        indiceKey: 'enabled',
      });
      expect(testState).toBeDefined();
      const correctState = setCorrectState('enabled', charIds, 'played', []);
      expect(testState!).toMatchObject(correctState);
    });

    it('Should return state since no previous character existent', () => {
      const { testState } = setTestState({
        charIds,
        action: Action.previous,
        indices: charIds,
        fromKey: 'enabled',
      });
      expect(testState).toBeDefined();
      const correctState = setCorrectState('enabled', charIds, 'played', []);
      expect(testState!).toMatchObject(correctState);
    });
  });

  describe('Action: toggleChar', () => {
    it('Should disable second character', () => {
      const charIndex = charIds[1];
      const { complement, testState } = setTestState({
        charIds,
        action: Action.toggleChar,
        payload: { charIndex, charState: 'enabled' },
        indices: [charIndex],
        fromKey: 'enabled',
      });
      expect(testState).toBeDefined();
      expect(complement).toHaveLength(charIds.length - 1);
      const correctState = setCorrectState('enabled', complement!, 'disabled', [charIndex]);
      expect(testState!).toMatchObject(correctState);
    });

    it('Should re-enable disabled character', () => {
      const charIndex = charIds[1];
      const { complement, testState } = setTestState({
        charIds,
        action: Action.toggleChar,
        payload: { charIndex, charState: 'disabled' },
        indices: [charIndex],
        fromKey: 'disabled',
        indiceKey: 'enabled',
      });
      expect(testState).toBeDefined();
      expect(complement).toHaveLength(charIds.length - 1);
      const correctState = setCorrectState('enabled', [...complement!, charIndex], 'disabled', []);
      expect(testState!).toMatchObject(correctState);
    });

    it('Should not change state', () => {
      const charIndex = charIds[1];
      const { initialState, complement, testState } = setTestState({
        charIds,
        action: Action.toggleChar,
        payload: { charIndex, charState: 'played' },
        indices: [charIndex],
        fromKey: 'played',
        indiceKey: 'enabled',
      });
      expect(testState).toBeDefined();
      expect(complement).toHaveLength(charIds.length - 1);
      expect(testState!).toMatchObject(initialState);
    });
  });

  describe('Action: restore', () => {
    it('Should validate cookie', () => {
      const cookie: ICState = JSON.parse(
        `{"enabled":[${charIds.join(',')}],"played":[],"disabled":[],"hidden":[],"date":"2019-08-01T09:18:23.478Z"}`
      );
      const { initialState: correctState, testState: restoredState } = setTestState({
        charIds,
        action: Action.restore,
        payload: { cookieState: cookie },
      });
      expect(correctState.enabled).toHaveLength(charIds.length);
      expect(restoredState).toBeDefined();
      expect(correctState).toMatchObject(restoredState!);
    });

    describe('Should invalidate cookie data', () => {
      it('Invalid date', () => {
        const cookie: ICState = JSON.parse(
          `{"enabled":[${charIds.join(',')}],"played":[],"disabled":[],"hidden":[],"date":"invalid-date"}`
        );
        expect(Number.isNaN(Date.parse(cookie.date))).toEqual(true);
      });

      it('Invalid cookie', () => {
        const cookie: ICState = JSON.parse(
          `{"enabled":[${charIds.join(',')}],"played":[],"disabled":[],"hidden":[],"date":"invalid-date"}`
        );
        const { initialState: correctState, testState: restoredState } = setTestState({
          charIds,
          action: Action.restore,
          payload: { cookieState: cookie },
        });
        expect(restoredState).toBeDefined();
        expect(correctState).toMatchObject(restoredState!);
      });
    });
  });

  describe('Action: randomize', () => {
    it('Should produce a shuffled enabled array', () => {
      const { initialState } = setTestState({ charIds });
      const result = Reducer(initialState, { type: Action.randomize });

      // The randomize action filters and re-categorizes based on charArr properties
      // Just verify the result has enabled characters
      expect(result.enabled.length).toBeGreaterThan(0);
      expect(result.played).toBeDefined();
      expect(result.disabled).toBeDefined();
      expect(result.hidden).toBeDefined();
    });

    it('Should produce different orderings on multiple calls', () => {
      const { initialState } = setTestState({ charIds });
      const results = new Set<string>();

      for (let i = 0; i < 10; i++) {
        const result = Reducer(initialState, { type: Action.randomize });
        results.add(JSON.stringify(result.enabled));
      }

      // Should have multiple different orderings
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('Action: reset', () => {
    it('Should return initial state', () => {
      const stateWithChanges = {
        enabled: [1, 2, 3],
        played: [4, 5],
        disabled: [6, 7],
        hidden: [8],
      };
      const result = Reducer(stateWithChanges, { type: Action.reset });

      // Should have more characters than the test state (initial state has all chars)
      expect(result.enabled.length).toBeGreaterThan(3);
      expect(result.played).toEqual([]);
    });
  });

  describe('Action: resetPlayed', () => {
    it('Should combine enabled and played, then shuffle', () => {
      const stateWithPlayed = {
        enabled: [1, 2, 3],
        played: [4, 5, 6],
        disabled: [7],
        hidden: [8],
      };
      const result = Reducer(stateWithPlayed, { type: Action.resetPlayed });

      expect(result.enabled).toHaveLength(6); // 3 enabled + 3 played
      expect(result.played).toEqual([]);
      expect(result.disabled).toEqual([7]);
      expect(result.hidden).toEqual([8]);
    });

    it('Should contain all original enabled and played characters', () => {
      const stateWithPlayed = {
        enabled: [1, 2, 3],
        played: [4, 5, 6],
        disabled: [],
        hidden: [],
      };
      const result = Reducer(stateWithPlayed, { type: Action.resetPlayed });

      const allChars = [...stateWithPlayed.enabled, ...stateWithPlayed.played].sort();
      expect(result.enabled.sort()).toEqual(allChars);
    });
  });

  describe('Action: echo', () => {
    it('Should hide base fighters when echoes are shown (hidden is empty)', () => {
      const { initialState } = setTestState({ charIds });
      // Start with hidden empty (echoes are shown)
      const stateWithNoHidden = { ...initialState, hidden: [] };
      const result = Reducer(stateWithNoHidden, { type: Action.echo });

      // Should have moved some characters to hidden
      expect(result.hidden.length).toBeGreaterThan(0);
      expect(result.enabled.length).toBeLessThan(stateWithNoHidden.enabled.length);
    });

    it('Should show hidden characters when echoes are hidden', () => {
      const stateWithHidden = {
        enabled: [1, 2, 3],
        played: [],
        disabled: [],
        hidden: [4, 5, 6],
      };
      const result = Reducer(stateWithHidden, { type: Action.echo });

      expect(result.hidden).toEqual([]);
      expect(result.enabled).toHaveLength(6); // 3 + 3 from hidden
    });
  });
});
