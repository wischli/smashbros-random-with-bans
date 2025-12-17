import { describe, it, expect } from 'vitest';
import { helpItems } from './helpContent';
import { HelpContext } from './types';

describe('helpContent', () => {
  describe('Structure validation', () => {
    it('has all required fields for each help item', () => {
      helpItems.forEach((item) => {
        expect(item.id).toBeDefined();
        expect(typeof item.id).toBe('string');
        expect(item.title).toBeDefined();
        expect(typeof item.title).toBe('string');
        expect(item.icon).toBeDefined();
        expect(typeof item.icon).toBe('string');
        expect(item.description).toBeDefined();
        expect(typeof item.description).toBe('string');
      });
    });

    it('has unique IDs for all items', () => {
      const ids = helpItems.map((item) => item.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('has expected number of help items', () => {
      expect(helpItems.length).toBeGreaterThanOrEqual(6);
    });
  });

  describe('Conditional content logic', () => {
    const baseContext: HelpContext = {
      isRandomized: false,
      showSelectionScreen: false,
      echoEnabled: true,
      hasPlayedChars: false,
      hasDisabledChars: false,
    };

    describe('Settings Menu conditions', () => {
      const settingsItem = helpItems.find((item) => item.id === 'settings-menu');

      it('shows echo locked message when randomized', () => {
        const conditions = settingsItem?.conditionalContent?.filter((cc) =>
          cc.condition({ ...baseContext, isRandomized: true })
        );
        expect(conditions?.some((c) => c.content.includes('locked'))).toBe(true);
      });

      it('shows reset played unavailable when not randomized', () => {
        const conditions = settingsItem?.conditionalContent?.filter((cc) =>
          cc.condition({ ...baseContext, isRandomized: false })
        );
        expect(
          conditions?.some((c) => c.content.includes('Reset Played'))
        ).toBe(true);
      });
    });

    describe('Primary Action conditions', () => {
      const primaryItem = helpItems.find((item) => item.id === 'primary-action');

      it('shows Randomize info when not randomized', () => {
        const conditions = primaryItem?.conditionalContent?.filter((cc) =>
          cc.condition({ ...baseContext, isRandomized: false })
        );
        expect(conditions?.some((c) => c.content.includes('Randomize'))).toBe(true);
      });

      it('shows Next Player info when randomized', () => {
        const conditions = primaryItem?.conditionalContent?.filter((cc) =>
          cc.condition({ ...baseContext, isRandomized: true })
        );
        expect(conditions?.some((c) => c.content.includes('Next Player'))).toBe(true);
      });
    });

    describe('Character Cards conditions', () => {
      const charItem = helpItems.find((item) => item.id === 'character-cards');

      it('shows clicking disabled message when randomized', () => {
        const conditions = charItem?.conditionalContent?.filter((cc) =>
          cc.condition({ ...baseContext, isRandomized: true })
        );
        expect(conditions?.some((c) => c.content.includes('disabled'))).toBe(true);
      });

      it('shows click to toggle message when not randomized', () => {
        const conditions = charItem?.conditionalContent?.filter((cc) =>
          cc.condition({ ...baseContext, isRandomized: false })
        );
        expect(conditions?.some((c) => c.content.includes('toggle'))).toBe(true);
      });
    });

    describe('Show Echoes conditions', () => {
      const echoItem = helpItems.find((item) => item.id === 'show-echoes');

      it('shows cannot change message when randomized', () => {
        const conditions = echoItem?.conditionalContent?.filter((cc) =>
          cc.condition({ ...baseContext, isRandomized: true })
        );
        expect(conditions?.some((c) => c.content.includes('Cannot change'))).toBe(true);
      });

      it('shows included message when echo enabled and not randomized', () => {
        const conditions = echoItem?.conditionalContent?.filter((cc) =>
          cc.condition({ ...baseContext, isRandomized: false, echoEnabled: true })
        );
        expect(conditions?.some((c) => c.content.includes('included'))).toBe(true);
      });

      it('shows hidden message when echo disabled and not randomized', () => {
        const conditions = echoItem?.conditionalContent?.filter((cc) =>
          cc.condition({ ...baseContext, isRandomized: false, echoEnabled: false })
        );
        expect(conditions?.some((c) => c.content.includes('hidden'))).toBe(true);
      });
    });

    describe('Reset Played conditions', () => {
      const resetPlayedItem = helpItems.find((item) => item.id === 'reset-played');

      it('shows start randomizing message when not randomized', () => {
        const conditions = resetPlayedItem?.conditionalContent?.filter((cc) =>
          cc.condition({ ...baseContext, isRandomized: false })
        );
        expect(conditions?.some((c) => c.content.includes('Start randomizing'))).toBe(true);
      });

      it('shows no chars played message when randomized but no played chars', () => {
        const conditions = resetPlayedItem?.conditionalContent?.filter((cc) =>
          cc.condition({ ...baseContext, isRandomized: true, hasPlayedChars: false })
        );
        expect(conditions?.some((c) => c.content.includes('No characters'))).toBe(true);
      });

      it('shows click to start message when randomized with played chars', () => {
        const conditions = resetPlayedItem?.conditionalContent?.filter((cc) =>
          cc.condition({ ...baseContext, isRandomized: true, hasPlayedChars: true })
        );
        expect(conditions?.some((c) => c.content.includes('new round'))).toBe(true);
      });
    });

    describe('Reset All has no conditions', () => {
      const resetAllItem = helpItems.find((item) => item.id === 'reset-all');

      it('has no conditional content', () => {
        expect(resetAllItem?.conditionalContent).toBeUndefined();
      });
    });
  });
});
