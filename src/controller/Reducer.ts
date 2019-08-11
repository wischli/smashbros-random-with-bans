import { IChar, IState, ICState } from '../types/Types';
import { Action } from '../types/Actions';
import { charArray, initialCharState } from '../model/charArray/charArray';
import { resetPlayed } from './Reducer-utils';
import { randomize } from '../utils';

export const Reducer = (inputState: IState, action: { type: Action; cookieState?: ICState; charIndex?: number; charState?: keyof IState }): IState => {
  const state = { ...inputState };
  switch (action.type) {
    case Action.next: {
      if (state.enabled.length > 1) {
        const char = state.enabled.shift();
        state.played.push(char as number);
        return state;
      }
      return resetPlayed(state);
    }
    case Action.previous: {
      if (state.played.length > 0) {
        const char = state.played.pop();
        state.enabled.unshift(char as number);
      }
      return state;
    }
    case Action.randomize: {
      const { played, disabled, hidden } = state;
      const newState: IState = state.enabled.reduce(
        (rState: IState, charIndex: number) => {
          const char: IChar = charArray[charIndex];
          if (!char.enabled) {
            rState.disabled.push(charIndex);
          } else if (!char.display) {
            rState.hidden.push(charIndex);
          } else if (char.played) {
            rState.played.push(charIndex);
          } else {
            rState.enabled.push(charIndex);
          }
          return rState;
        },
        { enabled: [], played, disabled, hidden },
      );
      newState.enabled = randomize(newState.enabled);
      return newState;
    }
    case Action.echo: {
      switch (state.hidden.length) {
        case 0: {
          const { played, disabled } = state;
          return state.enabled.reduce(
            (rState: IState, charIndex: number) => {
              const char = charArray[charIndex];
              if (char.echo.length && char.echo[0] % 1 === 0) {
                rState.hidden.push(charIndex);
              } else {
                rState.enabled.push(charIndex);
              }
              return rState;
            },
            { enabled: [], played, disabled, hidden: [] },
          );
        }
        default: {
          const { enabled, played, disabled } = state;
          // TODO: enable played, enabled copy from echo char
          return state.hidden.reduce(
            (rState: IState, charIndex: number) => {
              rState.enabled.push(charIndex);
              return rState;
            },
            { enabled, played, disabled, hidden: [] },
          );
        }
      }
    }
    case Action.toggleChar: {
      if (!action.charIndex) {
        throw new Error(`Missing character index input for "toggleChar" reducer action`);
      }
      if (!action.charState) {
        throw new Error(`Missing character state key input for "toggleChar" reducer action`);
      }
      const { charIndex, charState } = action;
      if (charState === 'played') {
        return state;
      }
      if (charState !== 'hidden') {
        const targetKey: keyof IState = charState === 'disabled' ? 'enabled' : 'disabled';
        const index = state[charState].indexOf(charIndex);
        state[charState].splice(index, 1);
        state[targetKey].push(charIndex);
      }
      return state;
    }
    case Action.restore: {
      if (!action.cookieState) {
        throw new Error(`Unable to restore state for missing cookieState`);
      }
      const { enabled, played, disabled, hidden }: ICState = action.cookieState;
      if (enabled.length + played.length + disabled.length + hidden.length === charArray.length) {
        return { enabled, played, disabled, hidden };
      }
      return state;
    }
    case Action.reset:
      return initialCharState;
    default:
      throw new Error(`Unhandled Reducer action "${action}"`);
  }
};
