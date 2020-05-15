import Cookies from 'universal-cookie';
import { IState, ICState } from '../types/Types';

// set image location in dependence of character name
export const imigify = (name: string) => {
  const { href: location } = window.location;
  const root = 'https://wischli.github.io/smashbros-random-with-bans/';
  const imagePath = 'images/character_icons';
  const imageFolder = `${location.includes('local') ? `${location}public/` : root}${imagePath}`;
  const title = name
    .split(/[. \-&]/g)
    .map(item => item.toLowerCase())
    .join('');
  return `${imageFolder}/${title}.png`;
};

// save current character state in cookie
export const saveCharacters = (inputState: IState) => {
  const cookies = new Cookies();
  const currentState = Object.keys(inputState).reduce(
    (cookieState: ICState, key: string) => {
      const theKey = key as keyof IState;
      return { ...cookieState, [key]: inputState[theKey].map((charIndex: number) => charIndex) };
    },
    { enabled: [], played: [], disabled: [], hidden: [], date: new Date().toJSON() },
  );
  cookies.set('characters', JSON.stringify(currentState), { path: '/' });
};

// randomize array
export const randomize = (inputArr: number[]) => {
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
