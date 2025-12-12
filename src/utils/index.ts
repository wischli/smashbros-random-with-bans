import { IState, ISavedState } from '../types/Types';

const STORAGE_KEY = 'smash-random-state';
const VIEW_KEY = 'smash-random-view';
const RANDOMIZED_KEY = 'smash-random-randomized';

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

// Save view preference (grid vs screen)
export const saveViewPreference = (showSelectionScreen: boolean): void => {
  try {
    localStorage.setItem(VIEW_KEY, JSON.stringify(showSelectionScreen));
  } catch (error) {
    console.error('Failed to save view preference:', error);
  }
};

// Load view preference
export const loadViewPreference = (): boolean | null => {
  try {
    const saved = localStorage.getItem(VIEW_KEY);
    if (saved === null) return null;
    return JSON.parse(saved) as boolean;
  } catch (error) {
    console.error('Failed to load view preference:', error);
    return null;
  }
};

// Save randomized state
export const saveRandomizedState = (isRandomized: boolean): void => {
  try {
    localStorage.setItem(RANDOMIZED_KEY, JSON.stringify(isRandomized));
  } catch (error) {
    console.error('Failed to save randomized state:', error);
  }
};

// Load randomized state
export const loadRandomizedState = (): boolean | null => {
  try {
    const saved = localStorage.getItem(RANDOMIZED_KEY);
    if (saved === null) return null;
    return JSON.parse(saved) as boolean;
  } catch (error) {
    console.error('Failed to load randomized state:', error);
    return null;
  }
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
