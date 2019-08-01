import { initialCharState, CharacterList } from './CharacterList';
import { Icharacter, Istate, ReducerAction, IcookieState } from './Interfaces';

// randomize array
const randomize = (inputArr: Icharacter[]) => {
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
    state.played.map((char: Icharacter) => {
      return { ...char, played: false };
    }),
  );
  state.played = [];
  return state;
};

// get characters by their ID
export const getCharactersByIds = (cookieState: IcookieState): Istate => {
  const getCharacterById = (id: number, stateKey: keyof Istate): Icharacter => {
    for (const character of CharacterList) {
      if (character.id === id) {
        switch (stateKey) {
          case 'enabled':
            return { ...character };
          case 'played':
            return { ...character, played: true };
          case 'disabled':
            return { ...character, enabled: false };
          case 'hidden':
            return { ...character, display: false };
          default: {
            return character;
          }
        }
      }
    }
    throw new Error(`Cannot find character with id ${id}`);
  };
  return {
    enabled: cookieState.enabled.map((charId: number) => getCharacterById(charId, 'enabled')),
    played: cookieState.played.map((charId: number) => getCharacterById(charId, 'played')),
    disabled: cookieState.disabled.map((charId: number) => getCharacterById(charId, 'disabled')),
    hidden: cookieState.hidden.map((charId: number) => getCharacterById(charId, 'hidden')),
  };
};

// find character in state and return key and index
const findCharacter = (inputState: Istate, character: Icharacter): { stateKey: keyof Istate; index: number } => {
  let stateKey: keyof Istate = 'disabled';
  if (character.enabled && character.display) {
    stateKey = 'enabled';
  } else if (!character.display) {
    stateKey = 'hidden';
  } else if (character.played) {
    stateKey = 'played';
  }
  // const index: number = inputState[stateKey].indexOf(character);
  const charFind = inputState[stateKey].find(stateChar => stateChar.id === character.id);
  if (!charFind) {
    throw new Error(`Unable to find character "${character.name}" in state "${stateKey}"`);
  }
  const index: number = inputState[stateKey].indexOf(charFind as Icharacter);
  return { index, stateKey };
};

export const myReducer = (inputState: Istate, action: { type: ReducerAction; cookieState?: IcookieState; character?: Icharacter }): Istate => {
  const state = { ...inputState };
  switch (action.type) {
    case ReducerAction.next: {
      if (state.enabled.length > 1) {
        const char: Icharacter = state.enabled.shift() as Icharacter;
        char.played = true;
        state.played.push(char);
        return state;
      }
      return resetPlayed(state);
    }
    case ReducerAction.previous: {
      if (state.played.length > 0) {
        const char: Icharacter = state.played.pop() as Icharacter;
        char.played = false;
        state.enabled.unshift(char);
      }
      return state;
    }
    case ReducerAction.randomize: {
      const { played, disabled, hidden } = state;
      const newState: Istate = state.enabled.reduce(
        (rState: Istate, char: Icharacter) => {
          if (!char.enabled) {
            rState.disabled.push(char);
          } else if (!char.display) {
            rState.hidden.push(char);
          } else if (char.played) {
            rState.played.push(char);
          } else {
            rState.enabled.push(char);
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
            (rState: Istate, char: Icharacter) => {
              if (char.echo.length && char.echo[0] % 1 === 0) {
                rState.hidden.push({ ...char, display: false });
              } else {
                rState.enabled.push(char);
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
            (rState: Istate, char: Icharacter) => {
              rState.enabled.push({ ...char, display: true });
              return rState;
            },
            { enabled, played, disabled, hidden: [] },
          );
        }
      }
    }
    case ReducerAction.toggleChar: {
      if (!action.character) {
        throw new Error(`Missing character input for "toggleChar" reducer action`);
      }
      if (action.character.played) {
        return state;
      }
      const { character } = action;
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
      const { enabled, played, disabled, hidden }: IcookieState = action.cookieState;
      if (enabled.length + played.length + disabled.length + hidden.length === CharacterList.length) {
        return getCharactersByIds(action.cookieState);
      }
      return state;
    }
    case ReducerAction.reset:
      return initialCharState;
    default:
      throw new Error(`Unhandled myReducer action "${action}"`);
  }
};
