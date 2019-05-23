import { initialCharState } from './CharacterList';
import { Icharacter, Istate, ReducerAction } from './Interfaces';

// randomize array
const randomize = (inputArr: any[]) => {
  const arr = [...inputArr];
  let currentIndex: number = arr.length;
  let randomIndex: number = 0;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [arr[randomIndex], arr[currentIndex]] = [arr[currentIndex], arr[randomIndex]];
  }
  return arr;
};

// reset played characters and shuffle
const resetPlayed = (inputState: Istate) => {
  const state = {...inputState};
  state.enabled = randomize(state.played.map((char: Icharacter) => {
    char.played = false;
    return char;
  }));
  state.played = [];
  return state;
}

// find character in state and return key and index
const findCharacter = (inputState: Istate, character: Icharacter): { stateKey: keyof Istate, index: number } => {
  let stateKey: keyof Istate = 'disabled';
  if (character.enabled && character.display) {
    stateKey = 'enabled';
  }
  else if (!character.display) {
    stateKey = 'hidden';
  }
  else if (character.played) {
    stateKey = 'played';
  }
  const index: number = inputState[stateKey].indexOf(character);
  if (index === -1) {
    throw new Error(`Unable to find character "${character.name}" in state "${stateKey}"`);
  }
  return { index, stateKey };
}

export const myReducer = (inputState: Istate, action: {type: ReducerAction, cookieState?: Istate, character?: Icharacter }): Istate => {
  const state = {...inputState};
  switch (action.type) {
    case ReducerAction.next: {
      if (state.enabled.length > 2) {
        const char: Icharacter = state.enabled.shift() as Icharacter;
        char.played = true;
        state.played.push(char);
        return state;
      }
      return resetPlayed(state);
    }
    case ReducerAction.previous: {
      if (state.played.length) {
        const char: Icharacter = state.played.pop() as Icharacter;
        char.played = false;
        state.enabled.unshift(char);
      }
      return state;
    };
    case ReducerAction.randomize: {
      const { played, disabled, hidden } = state;
      const newState: Istate = state.enabled.reduce((state: Istate, char: Icharacter) => {
        if (!char.enabled) {
          state.disabled.push(char);
        }
        else if (!char.display) {
          state.hidden.push(char);
        }
        else if (char.played) {
          state.played.push(char);
        }
        else {
          state.enabled.push(char);
        }
        return state;
      }, { enabled: [], played, disabled, hidden });
      newState.enabled = randomize(newState.enabled);
      return newState;
    }
    case ReducerAction.echo: {
      switch (state.hidden.length) {
        case 0: {
          const { played, disabled } = state;
          return state.enabled.reduce((state: Istate, char: Icharacter) => {
            if (char.echo.length && char.echo[0] % 1 === 0) {
              char.display = false;
              state.hidden.push(char);
            } else {
              state.enabled.push(char)
            }
            return state;
          }, { enabled: [], played, disabled, hidden: [] });
        }
        default: {
          const { enabled, played, disabled } = state;
          // TODO: enable played, enabled copy from echo char
          return state.hidden.reduce((state: Istate, char: Icharacter) => {
            char.display = true;
            state.enabled.push(char);
            return state;
          }, { enabled, played, disabled, hidden: [] });
        }
      }
    }
    case ReducerAction.toggleChar: {
      if (!action.character) {
        throw new Error(`Missing character input for "toggleChar" reducer action`);
      }
      const { character } = action;
      const { index, stateKey } = findCharacter(state, character);
      character.enabled = !character.enabled;
      if (stateKey !== 'hidden') {
        const targetKey: keyof Istate = stateKey === 'disabled' ? 'enabled' : 'disabled';
        state[stateKey].splice(index, 1);
        state[targetKey].push(character);
      }
      return state;
    }
    case ReducerAction.restore: {
      if (!action.cookieState) {
        throw new Error(`Unable to restore state for missing cookieState`);
      }
      return action.cookieState;
    }
    case ReducerAction.reset: return initialCharState;
    default: throw new Error(`Unhandled myReducer action "${action}"`);
  };
};
