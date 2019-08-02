import { initialCharState, CharacterList } from './CharacterList';
import { Icharacter, Istate, ReducerAction, IcookieState } from './Interfaces';

// randomize array
const randomize = (inputArr: number[]) => {
  const arr = [...inputArr];
  let currentIndex: number = arr.length;
  let randomIndex = 0;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [arr[randomIndex], arr[currentIndex]] = [arr[currentIndex], arr[randomIndex]];
  }
  return arr;
};

// reset played characters and shuffle
const resetPlayed = (inputState: Istate) => {
  const state = { ...inputState };
  state.enabled = randomize(
    state.played.map((charIndex: number) => {
      return charIndex;
    }),
  );
  state.played = [];
  return state;
};

export const myReducer = (inputState: Istate, action: { type: ReducerAction; cookieState?: IcookieState; charIndex?: number; charState?: keyof Istate }): Istate => {
  const state = { ...inputState };
  switch (action.type) {
    case ReducerAction.next: {
      if (state.enabled.length > 1) {
        const char = state.enabled.shift();
        state.played.push(char as number);
        return state;
      }
      return resetPlayed(state);
    }
    case ReducerAction.previous: {
      if (state.played.length > 0) {
        const char = state.played.pop();
        state.enabled.unshift(char as number);
      }
      return state;
    }
    case ReducerAction.randomize: {
      const { played, disabled, hidden } = state;
      const newState: Istate = state.enabled.reduce(
        (rState: Istate, charIndex: number) => {
          const char: Icharacter = CharacterList[charIndex];
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
    case ReducerAction.echo: {
      switch (state.hidden.length) {
        case 0: {
          const { played, disabled } = state;
          return state.enabled.reduce(
            (rState: Istate, charIndex: number) => {
              const char = CharacterList[charIndex];
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
            (rState: Istate, charIndex: number) => {
              rState.enabled.push(charIndex);
              return rState;
            },
            { enabled, played, disabled, hidden: [] },
          );
        }
      }
    }
    case ReducerAction.toggleChar: {
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
        const targetKey: keyof Istate = charState === 'disabled' ? 'enabled' : 'disabled';
        const index = state[charState].indexOf(charIndex);
        state[charState].splice(index, 1);
        state[targetKey].push(charIndex);
      }
      return state;
    }
    case ReducerAction.restore: {
      if (!action.cookieState) {
        throw new Error(`Unable to restore state for missing cookieState`);
      }
      const { enabled, played, disabled, hidden }: IcookieState = action.cookieState;
      if (enabled.length + played.length + disabled.length + hidden.length === CharacterList.length) {
        return { enabled, played, disabled, hidden };
      }
      return state;
    }
    case ReducerAction.reset:
      return initialCharState;
    default:
      throw new Error(`Unhandled myReducer action "${action}"`);
  }
};
