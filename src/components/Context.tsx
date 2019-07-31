import React from 'react';
import { Istate, Icookies } from './Interfaces';

export interface Icontext {
  cookies: Icookies;
  state: Istate;
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
