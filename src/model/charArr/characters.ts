// Complete Super Smash Bros. Ultimate character roster
// Fighter IDs follow official numbering (echoes use .5 suffix)
export const characters: {
  id: number;
  name: string;
  echo: number[];
}[] = [
  // Mario Series
  { id: 1, name: 'Mario', echo: [] },
  { id: 2, name: 'Luigi', echo: [] },
  { id: 3, name: 'Peach', echo: [3.5] },
  { id: 3.5, name: 'Daisy', echo: [3] },
  { id: 4, name: 'Bowser', echo: [] },
  { id: 5, name: 'Yoshi', echo: [] },
  { id: 6, name: 'Rosalina & Luma', echo: [] },
  { id: 47, name: 'Bowser Jr.', echo: [] },
  { id: 43, name: 'Dr. Mario', echo: [] },
  { id: 66, name: 'Piranha Plant', echo: [] },

  // Donkey Kong Series
  { id: 7, name: 'Donkey Kong', echo: [] },
  { id: 8, name: 'Diddy Kong', echo: [] },
  { id: 63, name: 'King K. Rool', echo: [] },

  // Zelda Series
  { id: 9, name: 'Link', echo: [] },
  { id: 10, name: 'Zelda', echo: [] },
  { id: 11, name: 'Sheik', echo: [] },
  { id: 45, name: 'Ganondorf', echo: [] },
  { id: 12, name: 'Toon Link', echo: [] },
  { id: 22, name: 'Young Link', echo: [] },

  // Metroid Series
  { id: 13, name: 'Samus', echo: [13.5] },
  { id: 13.5, name: 'Dark Samus', echo: [13] },
  { id: 14, name: 'Zero Suit Samus', echo: [] },
  { id: 61, name: 'Ridley', echo: [] },

  // Kirby Series
  { id: 20, name: 'Kirby', echo: [] },
  { id: 21, name: 'King Dedede', echo: [] },
  { id: 54, name: 'Meta Knight', echo: [] },

  // Star Fox Series
  { id: 24, name: 'Fox', echo: [] },
  { id: 39, name: 'Falco', echo: [] },
  { id: 71, name: 'Wolf', echo: [] },

  // Pokemon Series
  { id: 25, name: 'Pikachu', echo: [] },
  { id: 26, name: 'Pokemon Trainer', echo: [] },
  { id: 19, name: 'Pichu', echo: [] },
  { id: 27, name: 'Jigglypuff', echo: [] },
  { id: 28, name: 'Mewtwo', echo: [] },
  { id: 41, name: 'Lucario', echo: [] },
  { id: 50, name: 'Greninja', echo: [] },
  { id: 65, name: 'Incineroar', echo: [] },

  // Fire Emblem Series
  { id: 17, name: 'Marth', echo: [17.5] },
  { id: 17.5, name: 'Lucina', echo: [17] },
  { id: 18, name: 'Roy', echo: [18.5] },
  { id: 18.5, name: 'Chrom', echo: [18] },
  { id: 32, name: 'Ike', echo: [] },
  { id: 56, name: 'Robin', echo: [] },
  { id: 58, name: 'Corrin', echo: [] },
  { id: 75, name: 'Byleth', echo: [] },

  // Kid Icarus Series
  { id: 15, name: 'Pit', echo: [15.5] },
  { id: 15.5, name: 'Dark Pit', echo: [15] },
  { id: 16, name: 'Palutena', echo: [] },

  // EarthBound/Mother Series
  { id: 38, name: 'Ness', echo: [] },
  { id: 37, name: 'Lucas', echo: [] },

  // F-Zero Series
  { id: 29, name: 'Captain Falcon', echo: [] },

  // Ice Climber Series
  { id: 42, name: 'Ice Climbers', echo: [] },

  // Wario Series
  { id: 40, name: 'Wario', echo: [] },

  // Metal Gear Series
  { id: 31, name: 'Snake', echo: [] },

  // Sonic Series
  { id: 36, name: 'Sonic', echo: [] },

  // Pikmin Series
  { id: 44, name: 'Olimar', echo: [] },

  // R.O.B.
  { id: 46, name: 'R.O.B.', echo: [] },

  // Animal Crossing Series
  { id: 30, name: 'Villager', echo: [] },
  { id: 64, name: 'Isabelle', echo: [] },

  // Mega Man Series
  { id: 35, name: 'Mega Man', echo: [] },

  // Wii Fit Series
  { id: 48, name: 'Wii Fit Trainer', echo: [] },

  // Punch-Out!! Series
  { id: 23, name: 'Little Mac', echo: [] },

  // Mii Series
  { id: 51, name: 'Mii Fighter Brawler', echo: [] },
  { id: 52, name: 'Mii Fighter Sword', echo: [] },
  { id: 53, name: 'Mii Fighter Shooter', echo: [] },

  // Pac-Man
  { id: 55, name: 'Pac-Man', echo: [] },

  // Xenoblade Series
  { id: 57, name: 'Shulk', echo: [] },
  { id: 79, name: 'Pyra & Mythra', echo: [] },

  // Duck Hunt
  { id: 59, name: 'Duck Hunt', echo: [] },

  // Street Fighter Series
  { id: 60, name: 'Ryu', echo: [60.5] },
  { id: 60.5, name: 'Ken', echo: [60] },

  // Final Fantasy Series
  { id: 61.5, name: 'Cloud', echo: [] },
  { id: 78, name: 'Sephiroth', echo: [] },

  // Bayonetta Series
  { id: 62, name: 'Bayonetta', echo: [] },

  // Splatoon Series
  { id: 64.5, name: 'Inkling', echo: [] },

  // Castlevania Series
  { id: 66.5, name: 'Simon', echo: [66.6] },
  { id: 66.6, name: 'Richter', echo: [66.5] },

  // Persona Series
  { id: 67, name: 'Joker', echo: [] },

  // Dragon Quest Series
  { id: 68, name: 'Hero', echo: [] },

  // Banjo-Kazooie Series
  { id: 69, name: 'Banjo & Kazooie', echo: [] },

  // Fatal Fury / King of Fighters Series
  { id: 74, name: 'Terry', echo: [] },

  // ARMS Series
  { id: 76, name: 'Min Min', echo: [] },

  // Minecraft Series
  { id: 77, name: 'Steve', echo: [] },

  // Tekken Series
  { id: 80, name: 'Kazuya', echo: [] },

  // Kingdom Hearts Series
  { id: 81, name: 'Sora', echo: [] },

  // Game & Watch Series
  { id: 33, name: 'Mr. Game & Watch', echo: [] },
];
