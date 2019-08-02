import { Icharacter, Istate } from './Interfaces';

const imageFolder = window.location.href.includes('local') ? `${window.location.href}images/character_icons/` : 'https://wischli.github.io/smashbros-random-with-bans/images/character_icons';
// const imageFolder = `https://wischli.github.io/smashbros-random-with-bans/images/character_icons`;
function imigify(name: string) {
  const title = name
    .split(/[. \-&]/g)
    .map(item => item.toLowerCase())
    .join('');
  return `${imageFolder}/${title}.png`;
}

const CharacterList: Icharacter[] = [
  {
    id: 1,
    name: 'Mario',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 43,
    name: 'Dr. Mario',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 2,
    name: 'Luigi',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 3,
    name: 'Peach',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [3.5],
    display: true,
    moves: [],
  },
  {
    id: 3.5,
    name: 'Daisy',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [3],
    display: true,
    moves: [],
  },
  {
    id: 4,
    name: 'Bowser',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 5,
    name: 'Yoshi',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 6,
    name: 'Rosalina & Luma',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 7,
    name: 'Donkey Kong',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 8,
    name: 'Diddy Kong',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 9,
    name: 'Link',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 10,
    name: 'Zelda',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 11,
    name: 'Sheik',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 45,
    name: 'Ganondorf',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 12,
    name: 'Toon Link',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 12.9,
    name: 'Young Link',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 13,
    name: 'Samus',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [13.5],
    display: true,
    moves: [],
  },
  {
    id: 13.5,
    name: 'Dark Samus',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [13],
    display: true,
    moves: [],
  },
  {
    id: 14,
    name: 'Zero Suit Samus',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 15,
    name: 'Pit',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [15],
    display: true,
    moves: [],
  },
  {
    id: 15.5,
    name: 'Dark Pit',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [15.5],
    display: true,
    moves: [],
  },
  {
    id: 16,
    name: 'Palutena',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 17,
    name: 'Marth',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [17.5],
    display: true,
    moves: [],
  },
  {
    id: 17.5,
    name: 'Lucina',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [17],
    display: true,
    moves: [],
  },
  {
    id: 18,
    name: 'Ike',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 19,
    name: 'Robin',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 20,
    name: 'Kirby',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 21,
    name: 'King Dedede',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 22,
    name: 'Meta Knight',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 23,
    name: 'Little Mac',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 24,
    name: 'Fox',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 25,
    name: 'Pikachu',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 25.9,
    name: 'Pichu',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 26,
    name: 'Pokemon Trainer',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  // {
  //   id: 26,
  //   name: 'Charizard',
  //   media: '',
  //   nicknames: [],
  //   enabled: true,
  //   played: false,
  //   randomOrder: -1,
  //   echo: [],
  //   display: true,
  //   moves: []
  // },
  // {
  //   id: 26.7,
  //   name: 'Ivysaur',
  //   media: '',
  //   nicknames: [],
  //   enabled: true,
  //   played: false,
  //   randomOrder: -1,
  //   echo: [],
  //   display: true,
  //   moves: []
  // },
  // {
  //   id: 26.8,
  //   name: 'Squirtle',
  //   media: '',
  //   nicknames: [],
  //   enabled: true,
  //   played: false,
  //   randomOrder: -1,
  //   echo: [],
  //   display: true,
  //   moves: []
  // },
  {
    id: 27,
    name: 'Lucario',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 28,
    name: 'Greninja',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 29,
    name: 'Captain Falcon',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 30,
    name: 'Villager',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 31,
    name: 'Olimar',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 32,
    name: 'Wii Fit Trainer',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 33,
    name: 'Shulk',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 34,
    name: 'Pac-Man',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 35,
    name: 'Mega Man',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 36,
    name: 'Sonic',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 38,
    name: 'Ness',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 39,
    name: 'Falco',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 40,
    name: 'Wario',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 41,
    name: 'Snake',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 42,
    name: 'Ice Climbers',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 44,
    name: 'R.O.B.',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 46,
    name: 'Mr. Game & Watch',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 47,
    name: 'Bowser Jr.',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 48,
    name: 'Duck Hunt',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 49,
    name: 'Jigglypuff',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 50,
    name: 'Mewtwo',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 51,
    name: 'Lucas',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 52,
    name: 'Roy',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [52.5],
    display: true,
    moves: [],
  },
  {
    id: 52.5,
    name: 'Chrom',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [52],
    display: true,
    moves: [],
  },
  {
    id: 53,
    name: 'Ryu',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [53.5],
    display: true,
    moves: [],
  },
  {
    id: 53.5,
    name: 'Ken',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [53],
    display: true,
    moves: [],
  },
  {
    id: 54,
    name: 'Cloud',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 55,
    name: 'Corrin',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 56,
    name: 'Bayonetta',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 57,
    name: 'Mii Fighter Brawler',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 58,
    name: 'Mii Fighter Shooter',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 59,
    name: 'Mii Fighter Sword',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 60,
    name: 'Inkling',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 61,
    name: 'Ridley',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 62,
    name: 'Simon',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [62.5],
    display: true,
    moves: [],
  },
  {
    id: 62.5,
    name: 'Richter',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [62],
    display: true,
    moves: [],
  },
  {
    id: 63,
    name: 'King K. Rool',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 64,
    name: 'Isabelle',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 65,
    name: 'Incineroar',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
  {
    id: 66,
    name: 'Piranha Plant',
    media: '',
    nicknames: [],
    enabled: true,
    played: false,
    randomOrder: -1,
    echo: [],
    display: true,
    moves: [],
  },
].map((char: Icharacter) => {
  return {...char, media: imigify(char.name)};
});
// const initialCharState: Istate = { enabled: CharacterList, played: [], disabled: [], hidden: [] };
const initialCharState: Istate = { enabled: CharacterList.map((char, index) => index), played: [], disabled: [], hidden: [] };

export { CharacterList, initialCharState, imigify };
