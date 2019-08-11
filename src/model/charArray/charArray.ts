import { IChar, IState } from '../../types/Types';
import { characters } from './characters';
import { imigify } from '../../utils';

export const charArray: IChar[] = characters.map(char => 
  ({
    ...char,
    media: imigify(char.name),
    enabled: true,
    played: false,
    display: true,
  })
);

export const initialCharState: IState = { enabled: charArray.map((char, index) => index), played: [], disabled: [], hidden: [] };
