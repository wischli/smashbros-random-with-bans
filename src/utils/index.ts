import { IState, ISavedState } from '../types/Types';

const STORAGE_KEY = 'smash-random-state';

// Set image location based on character name
export const imigify = (name: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const imagePath = 'images/character_icons';
  const title = name
    .split(/[. \-&]/g)
    .map((item) => item.toLowerCase())
    .join('');
  return `${base}${imagePath}/${title}.png`;
};

// Save current character state to localStorage
export const saveState = (inputState: IState): void => {
  const savedState: ISavedState = {
    enabled: [...inputState.enabled],
    played: [...inputState.played],
    disabled: [...inputState.disabled],
    hidden: [...inputState.hidden],
    date: new Date().toJSON(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
  } catch (error) {
    console.error('Failed to save state to localStorage:', error);
  }
};

// Load character state from localStorage
export const loadState = (): ISavedState | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;

    const parsed = JSON.parse(saved) as ISavedState;

    // Validate the saved state has required fields
    if (
      !Array.isArray(parsed.enabled) ||
      !Array.isArray(parsed.played) ||
      !Array.isArray(parsed.disabled) ||
      !Array.isArray(parsed.hidden)
    ) {
      return null;
    }

    return parsed;
  } catch (error) {
    console.error('Failed to load state from localStorage:', error);
    return null;
  }
};

// Clear saved state from localStorage
export const clearState = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear state from localStorage:', error);
  }
};

// Check if there is a saved state
export const hasSavedState = (): boolean => {
  return localStorage.getItem(STORAGE_KEY) !== null;
};

// Randomize array using Fisher-Yates shuffle
export const randomize = <T>(inputArr: T[]): T[] => {
  const arr = [...inputArr];
  let currentIndex = arr.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    [arr[randomIndex], arr[currentIndex]] = [arr[currentIndex], arr[randomIndex]];
  }

  return arr;
};
