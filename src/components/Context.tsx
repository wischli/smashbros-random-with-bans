import React from 'react';
import { Istate } from './Interfaces';

export interface Icontext {
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
    options: any;
}

const MyContext = React.createContext<Icontext | null>(null);
export default MyContext;
