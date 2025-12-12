export interface IChar {
  id: number;
  name: string;
  enabled: boolean;
  played: boolean;
  display: boolean;
  echo: number[];
  media: string;
}

export interface IState {
  enabled: number[];
  played: number[];
  disabled: number[];
  hidden: number[];
}

export interface ISavedState extends IState {
  date: string;
}

// Legacy types for backwards compatibility
export interface ICState extends IState {
  date: string;
}

export interface ICookies {
  characters: ICState | boolean;
  notice: boolean;
}
