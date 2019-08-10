export interface Icharacter {
  id: number;
  name: string;
  enabled: boolean;
  played: boolean;
  display: boolean;
  echo: number[];
  media: string;
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
