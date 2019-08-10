export interface IChar {
  id: number;
  name: string;
  enabled: boolean;
  played: boolean;
  display: boolean;
  echo: number[];
  media: string;
}

export interface ICState {
  enabled: number[];
  played: number[];
  disabled: number[];
  hidden: number[];
  date: string;
}

export interface IState {
  enabled: number[];
  played: number[];
  disabled: number[];
  hidden: number[];
}

export interface ICookies {
  characters: ICState | boolean;
  notice: boolean;
}
