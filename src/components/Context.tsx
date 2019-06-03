import React from 'react';
import { Istate, Icookies } from './Interfaces';

export interface Icontext {
    cookies: Icookies;
    state: Istate;
    handleCharClick: any;
    themeStyle: any;
    handleEchoClick: any;
    handleCookieLoad: any;
    handleNextClick: any;
    handlePrevClick: any;
    handleDisplayClick: any;
    handleRandomizeClick: any;
    displayCard: boolean;
    displayLoad: boolean;
    disableLoad: any;
    displayRandomize: any;
    options: any;
}

const MyContext = React.createContext<Icontext | null>(null);
export default MyContext;
