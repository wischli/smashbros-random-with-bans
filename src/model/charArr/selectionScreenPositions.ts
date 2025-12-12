// Character positions on the SSBU selection screen (1280x459 image)
// Grid layout: Characters arranged by fighter number, echoes hidden

// Grid dimensions measured from the image
// Image: 1280x459, 13 columns, 6 rows
// Mario's left edge appears to be around x=42
// Peach's right edge appears to be around x=1137
// Total grid width: ~1095px for 13 chars = ~84.2px per cell
// First row top appears around y=92
// Last row bottom appears around y=452
// Total grid height: ~360px for 6 rows = ~60px per row
const GRID_START_X = 16;   // Left edge of Mario (first cell)
const GRID_START_Y = 58;   // Top edge of first character row (below Solo Battle header)
const CELL_WIDTH = 96;   // Width of each character cell - between 82 (left drift) and 85 (right drift)
const CELL_HEIGHT = 64;    // Height of each character cell (360px / 6 rows)
const COLS = 13;           // Characters per row

// Image dimensions
export const IMAGE_WIDTH = 1280;
export const IMAGE_HEIGHT = 459;

// Map character ID to grid position (row, col) - 0-indexed
// Based on actual SSBU selection screen layout from user's screenshot
// Reading the labels from the screenshot directly:
const characterGridPositions: Record<number, { row: number; col: number }> = {
  // Row 0: Mario, DK, Link, Samus, Yoshi, Kirby, Fox, Pikachu, Luigi, Ness, Cap Falcon, Jigglypuff, Peach
  1: { row: 0, col: 0 },      // Mario
  7: { row: 0, col: 1 },      // Donkey Kong
  9: { row: 0, col: 2 },      // Link
  13: { row: 0, col: 3 },     // Samus
  5: { row: 0, col: 4 },      // Yoshi
  20: { row: 0, col: 5 },     // Kirby
  24: { row: 0, col: 6 },     // Fox
  25: { row: 0, col: 7 },     // Pikachu
  2: { row: 0, col: 8 },      // Luigi
  38: { row: 0, col: 9 },     // Ness
  29: { row: 0, col: 10 },    // Captain Falcon
  27: { row: 0, col: 11 },    // Jigglypuff
  3: { row: 0, col: 12 },     // Peach

  // Row 1: Bowser, Ice Climbers, Sheik, Zelda, Dr Mario, Pichu, Falco, Marth, Young Link, Ganondorf, Mewtwo, Roy, G&W
  4: { row: 1, col: 0 },      // Bowser
  42: { row: 1, col: 1 },     // Ice Climbers
  11: { row: 1, col: 2 },     // Sheik
  10: { row: 1, col: 3 },     // Zelda
  43: { row: 1, col: 4 },     // Dr. Mario
  19: { row: 1, col: 5 },     // Pichu
  39: { row: 1, col: 6 },     // Falco
  17: { row: 1, col: 7 },     // Marth
  22: { row: 1, col: 8 },     // Young Link
  45: { row: 1, col: 9 },     // Ganondorf
  28: { row: 1, col: 10 },    // Mewtwo
  18: { row: 1, col: 11 },    // Roy
  33: { row: 1, col: 12 },    // Mr. Game & Watch

  // Row 2: Meta Knight, Pit, ZSS, Wario, Snake, Ike, Pokemon Trainer, Diddy, Lucas, Sonic, Dedede, Olimar, Lucario
  54: { row: 2, col: 0 },     // Meta Knight
  15: { row: 2, col: 1 },     // Pit
  14: { row: 2, col: 2 },     // Zero Suit Samus
  40: { row: 2, col: 3 },     // Wario
  31: { row: 2, col: 4 },     // Snake
  32: { row: 2, col: 5 },     // Ike
  26: { row: 2, col: 6 },     // Pokemon Trainer
  8: { row: 2, col: 7 },      // Diddy Kong
  37: { row: 2, col: 8 },     // Lucas
  36: { row: 2, col: 9 },     // Sonic
  21: { row: 2, col: 10 },    // King Dedede
  44: { row: 2, col: 11 },    // Olimar
  41: { row: 2, col: 12 },    // Lucario

  // Row 3: R.O.B., Toon Link, Wolf, Villager, Mega Man, WFT, Rosalina, Little Mac, Greninja, Palutena, Pac-Man, Robin, Shulk
  46: { row: 3, col: 0 },     // R.O.B.
  12: { row: 3, col: 1 },     // Toon Link
  71: { row: 3, col: 2 },     // Wolf
  30: { row: 3, col: 3 },     // Villager
  35: { row: 3, col: 4 },     // Mega Man
  48: { row: 3, col: 5 },     // Wii Fit Trainer
  6: { row: 3, col: 6 },      // Rosalina & Luma
  23: { row: 3, col: 7 },     // Little Mac
  50: { row: 3, col: 8 },     // Greninja
  16: { row: 3, col: 9 },     // Palutena
  55: { row: 3, col: 10 },    // Pac-Man
  56: { row: 3, col: 11 },    // Robin
  57: { row: 3, col: 12 },    // Shulk
  51: { row: 3, col: 9 },     // Mii Fighter Brawler (shares Palutena position - hidden in normal view)

  // Row 4: Bowser Jr, Duck Hunt, Ryu, Cloud, Corrin, Bayonetta, Inkling, Ridley, Simon, K Rool, Isabelle, Incineroar, Piranha Plant
  47: { row: 4, col: 0 },     // Bowser Jr.
  59: { row: 4, col: 1 },     // Duck Hunt
  60: { row: 4, col: 2 },     // Ryu
  61.5: { row: 4, col: 3 },   // Cloud
  58: { row: 4, col: 4 },     // Corrin
  62: { row: 4, col: 5 },     // Bayonetta
  64.5: { row: 4, col: 6 },   // Inkling
  61: { row: 4, col: 7 },     // Ridley
  66.5: { row: 4, col: 8 },   // Simon
  63: { row: 4, col: 9 },     // King K. Rool
  64: { row: 4, col: 10 },    // Isabelle
  65: { row: 4, col: 11 },    // Incineroar
  66: { row: 4, col: 12 },    // Piranha Plant

  // Row 5: Joker, Hero, Banjo, Terry, Byleth, Min Min, Steve, Sephiroth, Pyra/Mythra, Kazuya, Sora, Mii(CPU), (Random)
  67: { row: 5, col: 0 },     // Joker
  68: { row: 5, col: 1 },     // Hero
  69: { row: 5, col: 2 },     // Banjo & Kazooie
  74: { row: 5, col: 3 },     // Terry
  75: { row: 5, col: 4 },     // Byleth
  76: { row: 5, col: 5 },     // Min Min
  77: { row: 5, col: 6 },     // Steve
  78: { row: 5, col: 7 },     // Sephiroth
  79: { row: 5, col: 8 },     // Pyra & Mythra
  80: { row: 5, col: 9 },     // Kazuya
  81: { row: 5, col: 10 },    // Sora
  // col 11 is Mii/CPU slot, col 12 is Random - not mapped
};

// Mii fighters share the same position (amalgamated as one)
const MII_POSITION = { row: 3, col: 9 };
characterGridPositions[52] = MII_POSITION; // Mii Fighter Sword
characterGridPositions[53] = MII_POSITION; // Mii Fighter Shooter

// Echo fighters - map to their base fighter's position
characterGridPositions[3.5] = characterGridPositions[3];    // Daisy -> Peach
characterGridPositions[13.5] = characterGridPositions[13];  // Dark Samus -> Samus
characterGridPositions[15.5] = characterGridPositions[15];  // Dark Pit -> Pit
characterGridPositions[17.5] = characterGridPositions[17];  // Lucina -> Marth
characterGridPositions[18.5] = characterGridPositions[18];  // Chrom -> Roy
characterGridPositions[60.5] = characterGridPositions[60];  // Ken -> Ryu
characterGridPositions[66.6] = characterGridPositions[66.5]; // Richter -> Simon

export interface CharacterPosition {
  row: number;
  col: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

// Get pixel position for a character by their ID
export const getCharacterPosition = (charId: number): CharacterPosition | null => {
  const gridPos = characterGridPositions[charId];
  if (!gridPos) return null;

  return {
    row: gridPos.row,
    col: gridPos.col,
    x: GRID_START_X + (gridPos.col * CELL_WIDTH),
    y: GRID_START_Y + (gridPos.row * CELL_HEIGHT),
    width: CELL_WIDTH,
    height: CELL_HEIGHT,
  };
};

// Get all character positions for overlay rendering
export const getAllCharacterPositions = (): Map<number, CharacterPosition> => {
  const positions = new Map<number, CharacterPosition>();

  for (const [idStr, gridPos] of Object.entries(characterGridPositions)) {
    const id = parseFloat(idStr);
    positions.set(id, {
      row: gridPos.row,
      col: gridPos.col,
      x: GRID_START_X + (gridPos.col * CELL_WIDTH),
      y: GRID_START_Y + (gridPos.row * CELL_HEIGHT),
      width: CELL_WIDTH,
      height: CELL_HEIGHT,
    });
  }

  return positions;
};

// Grid configuration for overlay component
export const GRID_CONFIG = {
  startX: GRID_START_X,
  startY: GRID_START_Y,
  cellWidth: CELL_WIDTH,
  cellHeight: CELL_HEIGHT,
  cols: COLS,
  rows: 6,
};
