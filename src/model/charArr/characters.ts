// Complete Super Smash Bros. Ultimate character roster
// Ordered to match the in-game selection screen layout (left to right, top to bottom)
// Fighter IDs follow official numbering (echoes use .5 suffix)
export const characters: {
  id: number;
  name: string;
  echo: number[];
}[] = [
  // Row 0: Mario, DK, Link, Samus, Yoshi, Kirby, Fox, Pikachu, Luigi, Ness, Cap Falcon, Jigglypuff, Peach
  { id: 1, name: 'Mario', echo: [] },
  { id: 7, name: 'Donkey Kong', echo: [] },
  { id: 9, name: 'Link', echo: [] },
  { id: 13, name: 'Samus', echo: [13.5] },
  { id: 13.5, name: 'Dark Samus', echo: [13] },
  { id: 5, name: 'Yoshi', echo: [] },
  { id: 20, name: 'Kirby', echo: [] },
  { id: 24, name: 'Fox', echo: [] },
  { id: 25, name: 'Pikachu', echo: [] },
  { id: 2, name: 'Luigi', echo: [] },
  { id: 38, name: 'Ness', echo: [] },
  { id: 29, name: 'Captain Falcon', echo: [] },
  { id: 27, name: 'Jigglypuff', echo: [] },
  { id: 3, name: 'Peach', echo: [3.5] },
  { id: 3.5, name: 'Daisy', echo: [3] },

  // Row 1: Bowser, Ice Climbers, Sheik, Zelda, Dr Mario, Pichu, Falco, Marth, Young Link, Ganondorf, Mewtwo, Roy, G&W
  { id: 4, name: 'Bowser', echo: [] },
  { id: 42, name: 'Ice Climbers', echo: [] },
  { id: 11, name: 'Sheik', echo: [] },
  { id: 10, name: 'Zelda', echo: [] },
  { id: 43, name: 'Dr. Mario', echo: [] },
  { id: 19, name: 'Pichu', echo: [] },
  { id: 39, name: 'Falco', echo: [] },
  { id: 17, name: 'Marth', echo: [17.5] },
  { id: 17.5, name: 'Lucina', echo: [17] },
  { id: 22, name: 'Young Link', echo: [] },
  { id: 45, name: 'Ganondorf', echo: [] },
  { id: 28, name: 'Mewtwo', echo: [] },
  { id: 18, name: 'Roy', echo: [18.5] },
  { id: 18.5, name: 'Chrom', echo: [18] },
  { id: 33, name: 'Mr. Game & Watch', echo: [] },

  // Row 2: Meta Knight, Pit, ZSS, Wario, Snake, Ike, Pokemon Trainer, Diddy, Lucas, Sonic, Dedede, Olimar, Lucario
  { id: 54, name: 'Meta Knight', echo: [] },
  { id: 15, name: 'Pit', echo: [15.5] },
  { id: 15.5, name: 'Dark Pit', echo: [15] },
  { id: 14, name: 'Zero Suit Samus', echo: [] },
  { id: 40, name: 'Wario', echo: [] },
  { id: 31, name: 'Snake', echo: [] },
  { id: 32, name: 'Ike', echo: [] },
  { id: 26, name: 'Pokemon Trainer', echo: [] },
  { id: 8, name: 'Diddy Kong', echo: [] },
  { id: 37, name: 'Lucas', echo: [] },
  { id: 36, name: 'Sonic', echo: [] },
  { id: 21, name: 'King Dedede', echo: [] },
  { id: 44, name: 'Olimar', echo: [] },
  { id: 41, name: 'Lucario', echo: [] },

  // Row 3: R.O.B., Toon Link, Wolf, Villager, Mega Man, WFT, Rosalina, Little Mac, Greninja, Mii, Pac-Man, Robin, Shulk
  { id: 46, name: 'R.O.B.', echo: [] },
  { id: 12, name: 'Toon Link', echo: [] },
  { id: 71, name: 'Wolf', echo: [] },
  { id: 30, name: 'Villager', echo: [] },
  { id: 35, name: 'Mega Man', echo: [] },
  { id: 48, name: 'Wii Fit Trainer', echo: [] },
  { id: 6, name: 'Rosalina & Luma', echo: [] },
  { id: 23, name: 'Little Mac', echo: [] },
  { id: 50, name: 'Greninja', echo: [] },
  { id: 51, name: 'Mii Fighter Brawler', echo: [] },
  { id: 52, name: 'Mii Fighter Sword', echo: [] },
  { id: 53, name: 'Mii Fighter Shooter', echo: [] },
  { id: 55, name: 'Pac-Man', echo: [] },
  { id: 56, name: 'Robin', echo: [] },
  { id: 57, name: 'Shulk', echo: [] },

  // Row 4: Bowser Jr, Duck Hunt, Ryu, Cloud, Corrin, Bayonetta, Inkling, Ridley, Simon, K Rool, Isabelle, Incineroar, Piranha Plant
  { id: 47, name: 'Bowser Jr.', echo: [] },
  { id: 59, name: 'Duck Hunt', echo: [] },
  { id: 60, name: 'Ryu', echo: [60.5] },
  { id: 60.5, name: 'Ken', echo: [60] },
  { id: 61.5, name: 'Cloud', echo: [] },
  { id: 58, name: 'Corrin', echo: [] },
  { id: 62, name: 'Bayonetta', echo: [] },
  { id: 64.5, name: 'Inkling', echo: [] },
  { id: 61, name: 'Ridley', echo: [] },
  { id: 66.5, name: 'Simon', echo: [66.6] },
  { id: 66.6, name: 'Richter', echo: [66.5] },
  { id: 63, name: 'King K. Rool', echo: [] },
  { id: 64, name: 'Isabelle', echo: [] },
  { id: 65, name: 'Incineroar', echo: [] },
  { id: 66, name: 'Piranha Plant', echo: [] },

  // Row 5: Joker, Hero, Banjo, Terry, Byleth, Min Min, Steve, Sephiroth, Pyra/Mythra, Kazuya, Sora
  { id: 67, name: 'Joker', echo: [] },
  { id: 68, name: 'Hero', echo: [] },
  { id: 69, name: 'Banjo & Kazooie', echo: [] },
  { id: 74, name: 'Terry', echo: [] },
  { id: 75, name: 'Byleth', echo: [] },
  { id: 76, name: 'Min Min', echo: [] },
  { id: 77, name: 'Steve', echo: [] },
  { id: 78, name: 'Sephiroth', echo: [] },
  { id: 79, name: 'Pyra & Mythra', echo: [] },
  { id: 80, name: 'Kazuya', echo: [] },
  { id: 81, name: 'Sora', echo: [] },

  // Palutena was missing - she's on row 3 col 10 but between Mii and Pac-Man
  { id: 16, name: 'Palutena', echo: [] },
];
