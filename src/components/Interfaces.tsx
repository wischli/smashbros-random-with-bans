export interface Icharacter {
  id: number;
  name: string;
  enabled: boolean;
  played: boolean;
  display: boolean;
  echo: number[];
  // randomOrder: number;
  media: string;
  // moves?: string[];
  // nicknames?: string[];
}

export interface IcookieState {
  enabled: number[];
  played: number[];
  disabled: number[];
  hidden: number[];
  date: string;
}

export interface Istate {
  enabled: number[];
  played: number[];
  disabled: number[];
  hidden: number[];
}

export interface Icookies {
  characters: IcookieState | boolean;
  notice: boolean;
}

export enum ReducerAction {
  randomize = 'randomize',
  next = 'next',
  previous = 'previous',
  restore = 'restore',
  echo = 'echo',
  save = 'save',
  reset = 'reset',
  toggleChar = 'toggleChar',
}
