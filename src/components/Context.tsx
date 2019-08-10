import React from 'react';
import { IState, ICookies } from '../types/Types';

export interface Icontext {
  cookies: ICookies;
  state: IState;
  handleCharClick: Function;
  themeStyle: any;
  handleEchoClick: Function;
  handleCookieLoad: Function;
  handleNextClick: Function;
  handlePrevClick: Function;
  handleDisplayClick: Function;
  handleRandomizeClick: Function;
  displayCard: boolean;
  displayLoad: boolean;
  disableLoad: React.Dispatch<React.SetStateAction<boolean>>;
  displayRandomize: boolean;
  options: { echo: boolean };
}

const MyContext = React.createContext<Icontext | null>(null);
export default MyContext;
