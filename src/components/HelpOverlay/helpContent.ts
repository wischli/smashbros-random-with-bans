import { HelpItem } from './types';

export const helpItems: HelpItem[] = [
  {
    id: 'settings-menu',
    title: 'Settings Menu',
    icon: '☰',
    description: 'Access app settings including echo fighters toggle and reset options.',
    conditionalContent: [
      {
        condition: (ctx) => ctx.isRandomized,
        content: '"Show Echoes" is locked during randomization. Use "Reset All" to change this setting.',
        isWarning: true,
      },
      {
        condition: (ctx) => !ctx.isRandomized,
        content: '"Reset Played" is only available after randomization starts.',
        isWarning: true,
      },
    ],
  },
  {
    id: 'view-toggle',
    title: 'View Toggle',
    icon: '⇄',
    description: 'Switch between Grid View (scrollable list of all characters) and Selection Screen View (official Smash Bros layout).',
  },
  {
    id: 'primary-action',
    title: 'Primary Action',
    icon: '▶',
    description: 'Main action button that changes based on game state.',
    conditionalContent: [
      {
        condition: (ctx) => !ctx.isRandomized,
        content: 'Currently shows "Randomize" - Click to shuffle characters and start the selection process.',
        isWarning: false,
      },
      {
        condition: (ctx) => ctx.isRandomized,
        content: 'Currently shows "Next Player" - Click to advance to the next random character in the queue.',
        isWarning: false,
      },
    ],
  },
  {
    id: 'character-cards',
    title: 'Character Cards',
    icon: '👤',
    description: 'Click any character to ban/unban them from the random selection pool.',
    conditionalContent: [
      {
        condition: (ctx) => ctx.isRandomized,
        content: 'Clicking is disabled during randomization. Red = Banned, Grey = Already Played.',
        isWarning: true,
      },
      {
        condition: (ctx) => !ctx.isRandomized,
        content: 'Click to toggle ban status. Red overlay indicates a banned character.',
        isWarning: false,
      },
    ],
  },
  {
    id: 'show-echoes',
    title: 'Show Echoes',
    icon: '✓',
    description: 'Toggle visibility of Echo Fighters (clone characters like Dark Pit, Lucina, Daisy, etc.).',
    conditionalContent: [
      {
        condition: (ctx) => ctx.isRandomized,
        content: 'Cannot change during randomization. Reset All to modify this setting.',
        isWarning: true,
      },
      {
        condition: (ctx) => ctx.echoEnabled && !ctx.isRandomized,
        content: 'Echo fighters are currently included in the random pool.',
        isWarning: false,
      },
      {
        condition: (ctx) => !ctx.echoEnabled && !ctx.isRandomized,
        content: 'Echo fighters are currently hidden from the random pool.',
        isWarning: false,
      },
    ],
  },
  {
    id: 'reset-played',
    title: 'Reset Played',
    icon: '↻',
    description: 'Start a new round - reshuffles all played characters back into the pool while keeping your bans intact.',
    conditionalContent: [
      {
        condition: (ctx) => !ctx.isRandomized,
        content: 'Start randomizing first to enable this option.',
        isWarning: true,
      },
      {
        condition: (ctx) => ctx.isRandomized && !ctx.hasPlayedChars,
        content: 'No characters have been played yet.',
        isWarning: false,
      },
      {
        condition: (ctx) => ctx.isRandomized && ctx.hasPlayedChars,
        content: 'Click to start a new round with the same bans.',
        isWarning: false,
      },
    ],
  },
  {
    id: 'reset-all',
    title: 'Reset All',
    icon: '⟲',
    description: 'Clear everything - all bans, played characters, and randomization state. Returns the app to its initial state.',
  },
];
