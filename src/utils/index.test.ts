import { describe, it, expect, vi } from 'vitest';
import {
  imigify,
  saveState,
  loadState,
  clearState,
  hasSavedState,
  saveViewPreference,
  loadViewPreference,
  saveRandomizedState,
  loadRandomizedState,
  randomize,
} from './index';
import { IState } from '../types/Types';

describe('Utility Functions', () => {
  describe('imigify', () => {
    it('converts simple names to image paths', () => {
      const result = imigify('Mario');
      expect(result).toContain('mario.png');
      expect(result).toContain('images/character_icons');
    });

    it('handles names with spaces', () => {
      const result = imigify('Donkey Kong');
      expect(result).toContain('donkeykong.png');
    });

    it('handles names with dots', () => {
      const result = imigify('Mr. Game & Watch');
      expect(result).toContain('mrgamewatch.png');
    });

    it('handles names with hyphens', () => {
      const result = imigify('Pac-Man');
      expect(result).toContain('pacman.png');
    });

    it('handles names with ampersands', () => {
      const result = imigify('Banjo & Kazooie');
      expect(result).toContain('banjokazooie.png');
    });
  });

  describe('State Persistence', () => {
    const mockState: IState = {
      enabled: [1, 2, 3],
      played: [4, 5],
      disabled: [6],
      hidden: [7, 8],
    };

    describe('saveState', () => {
      it('saves state to localStorage', () => {
        saveState(mockState);
        expect(localStorage.setItem).toHaveBeenCalled();
        const savedData = JSON.parse(
          (localStorage.setItem as ReturnType<typeof vi.fn>).mock.calls[0][1]
        );
        expect(savedData.enabled).toEqual([1, 2, 3]);
        expect(savedData.played).toEqual([4, 5]);
        expect(savedData.disabled).toEqual([6]);
        expect(savedData.hidden).toEqual([7, 8]);
        expect(savedData.date).toBeDefined();
      });

      it('does not mutate original state arrays', () => {
        const originalEnabled = [...mockState.enabled];
        saveState(mockState);
        expect(mockState.enabled).toEqual(originalEnabled);
      });
    });

    describe('loadState', () => {
      it('returns null when no state is saved', () => {
        const result = loadState();
        expect(result).toBeNull();
      });

      it('loads valid saved state', () => {
        const savedState = {
          enabled: [1, 2, 3],
          played: [4],
          disabled: [5],
          hidden: [6],
          date: new Date().toJSON(),
        };
        localStorage.setItem('smash-random-state', JSON.stringify(savedState));

        const result = loadState();
        expect(result).toEqual(savedState);
      });

      it('returns null for invalid JSON', () => {
        localStorage.setItem('smash-random-state', 'not valid json');
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

        const result = loadState();
        expect(result).toBeNull();

        consoleSpy.mockRestore();
      });

      it('returns null when enabled is not an array', () => {
        const invalidState = {
          enabled: 'not an array',
          played: [],
          disabled: [],
          hidden: [],
        };
        localStorage.setItem('smash-random-state', JSON.stringify(invalidState));

        const result = loadState();
        expect(result).toBeNull();
      });

      it('returns null when required fields are missing', () => {
        const invalidState = {
          enabled: [1, 2, 3],
          // missing played, disabled, hidden
        };
        localStorage.setItem('smash-random-state', JSON.stringify(invalidState));

        const result = loadState();
        expect(result).toBeNull();
      });
    });

    describe('clearState', () => {
      it('removes state from localStorage', () => {
        localStorage.setItem('smash-random-state', JSON.stringify(mockState));
        clearState();
        expect(localStorage.removeItem).toHaveBeenCalledWith('smash-random-state');
      });
    });

    describe('hasSavedState', () => {
      it('returns false when no state is saved', () => {
        expect(hasSavedState()).toBe(false);
      });

      it('returns true when state is saved', () => {
        localStorage.setItem('smash-random-state', 'some data');
        expect(hasSavedState()).toBe(true);
      });
    });
  });

  describe('View Preference', () => {
    describe('saveViewPreference', () => {
      it('saves true preference', () => {
        saveViewPreference(true);
        expect(localStorage.setItem).toHaveBeenCalledWith(
          'smash-random-view',
          'true'
        );
      });

      it('saves false preference', () => {
        saveViewPreference(false);
        expect(localStorage.setItem).toHaveBeenCalledWith(
          'smash-random-view',
          'false'
        );
      });
    });

    describe('loadViewPreference', () => {
      it('returns null when no preference is saved', () => {
        expect(loadViewPreference()).toBeNull();
      });

      it('returns true when true is saved', () => {
        localStorage.setItem('smash-random-view', 'true');
        expect(loadViewPreference()).toBe(true);
      });

      it('returns false when false is saved', () => {
        localStorage.setItem('smash-random-view', 'false');
        expect(loadViewPreference()).toBe(false);
      });
    });
  });

  describe('Randomized State', () => {
    describe('saveRandomizedState', () => {
      it('saves true state', () => {
        saveRandomizedState(true);
        expect(localStorage.setItem).toHaveBeenCalledWith(
          'smash-random-randomized',
          'true'
        );
      });

      it('saves false state', () => {
        saveRandomizedState(false);
        expect(localStorage.setItem).toHaveBeenCalledWith(
          'smash-random-randomized',
          'false'
        );
      });
    });

    describe('loadRandomizedState', () => {
      it('returns null when no state is saved', () => {
        expect(loadRandomizedState()).toBeNull();
      });

      it('returns true when true is saved', () => {
        localStorage.setItem('smash-random-randomized', 'true');
        expect(loadRandomizedState()).toBe(true);
      });

      it('returns false when false is saved', () => {
        localStorage.setItem('smash-random-randomized', 'false');
        expect(loadRandomizedState()).toBe(false);
      });
    });
  });

  describe('randomize (Fisher-Yates shuffle)', () => {
    it('returns an array of the same length', () => {
      const input = [1, 2, 3, 4, 5];
      const result = randomize(input);
      expect(result).toHaveLength(input.length);
    });

    it('does not mutate the input array', () => {
      const input = [1, 2, 3, 4, 5];
      const inputCopy = [...input];
      randomize(input);
      expect(input).toEqual(inputCopy);
    });

    it('contains all original elements', () => {
      const input = [1, 2, 3, 4, 5];
      const result = randomize(input);
      expect(result.sort()).toEqual(input.sort());
    });

    it('handles empty arrays', () => {
      const result = randomize([]);
      expect(result).toEqual([]);
    });

    it('handles single element arrays', () => {
      const result = randomize([42]);
      expect(result).toEqual([42]);
    });

    it('handles arrays with duplicate values', () => {
      const input = [1, 1, 2, 2, 3];
      const result = randomize(input);
      expect(result.sort()).toEqual(input.sort());
    });

    it('produces different orderings (statistical test)', () => {
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const results = new Set<string>();

      // Run multiple times and check we get different orderings
      for (let i = 0; i < 20; i++) {
        results.add(JSON.stringify(randomize(input)));
      }

      // Should have multiple different orderings (very unlikely to get same order 20 times)
      expect(results.size).toBeGreaterThan(1);
    });
  });
});
