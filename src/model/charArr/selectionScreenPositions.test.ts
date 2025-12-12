import { describe, it, expect } from 'vitest';
import { GRID_CONFIG, IMAGE_WIDTH, IMAGE_HEIGHT, getCharacterPosition, getAllCharacterPositions } from './selectionScreenPositions';

describe('Selection Screen Grid Configuration', () => {
  // These values were carefully calibrated to match the SSBU selection screen image
  // DO NOT CHANGE without visual verification across all characters

  it('should have correct grid starting position', () => {
    expect(GRID_CONFIG.startX).toBe(16);
    expect(GRID_CONFIG.startY).toBe(58);
  });

  it('should have correct cell dimensions', () => {
    expect(GRID_CONFIG.cellWidth).toBe(96);
    expect(GRID_CONFIG.cellHeight).toBe(64);
  });

  it('should have correct grid size', () => {
    expect(GRID_CONFIG.cols).toBe(13);
    expect(GRID_CONFIG.rows).toBe(6);
  });

  it('should have correct image dimensions', () => {
    expect(IMAGE_WIDTH).toBe(1280);
    expect(IMAGE_HEIGHT).toBe(459);
  });

  it('should calculate grid bounds within image boundaries', () => {
    const gridEndX = GRID_CONFIG.startX + (GRID_CONFIG.cols * GRID_CONFIG.cellWidth);
    const gridEndY = GRID_CONFIG.startY + (GRID_CONFIG.rows * GRID_CONFIG.cellHeight);

    // Grid should fit within image
    expect(gridEndX).toBeLessThanOrEqual(IMAGE_WIDTH);
    expect(gridEndY).toBeLessThanOrEqual(IMAGE_HEIGHT);

    // Grid should use most of the available space
    expect(gridEndX).toBeGreaterThan(IMAGE_WIDTH * 0.9);
    expect(gridEndY).toBeGreaterThan(IMAGE_HEIGHT * 0.8);
  });
});

describe('Character Position Mapping', () => {
  it('should return position for Mario (ID 1)', () => {
    const pos = getCharacterPosition(1);
    expect(pos).not.toBeNull();
    expect(pos!.row).toBe(0);
    expect(pos!.col).toBe(0);
    expect(pos!.x).toBe(GRID_CONFIG.startX);
    expect(pos!.y).toBe(GRID_CONFIG.startY);
  });

  it('should return position for Peach (ID 3) at end of row 0', () => {
    const pos = getCharacterPosition(3);
    expect(pos).not.toBeNull();
    expect(pos!.row).toBe(0);
    expect(pos!.col).toBe(12);
    expect(pos!.x).toBe(GRID_CONFIG.startX + 12 * GRID_CONFIG.cellWidth);
  });

  it('should return position for Sora (ID 81) near end of last row', () => {
    const pos = getCharacterPosition(81);
    expect(pos).not.toBeNull();
    expect(pos!.row).toBe(5);
    expect(pos!.col).toBe(10);
  });

  it('should return null for non-existent character ID', () => {
    const pos = getCharacterPosition(999);
    expect(pos).toBeNull();
  });

  it('should map echo fighters to same position as base fighter', () => {
    const peachPos = getCharacterPosition(3);
    const daisyPos = getCharacterPosition(3.5);

    expect(peachPos).not.toBeNull();
    expect(daisyPos).not.toBeNull();
    expect(daisyPos!.row).toBe(peachPos!.row);
    expect(daisyPos!.col).toBe(peachPos!.col);
  });

  it('should have all Mii fighters at the same position', () => {
    const mii1 = getCharacterPosition(51); // Brawler
    const mii2 = getCharacterPosition(52); // Sword
    const mii3 = getCharacterPosition(53); // Shooter

    expect(mii1).not.toBeNull();
    expect(mii2).not.toBeNull();
    expect(mii3).not.toBeNull();
    expect(mii1!.row).toBe(mii2!.row);
    expect(mii1!.col).toBe(mii2!.col);
    expect(mii2!.row).toBe(mii3!.row);
    expect(mii2!.col).toBe(mii3!.col);
  });
});

describe('getAllCharacterPositions', () => {
  it('should return a Map with all character positions', () => {
    const positions = getAllCharacterPositions();

    // Should have positions for all characters (including echoes and Miis)
    expect(positions.size).toBeGreaterThan(70);

    // Verify Mario is included
    expect(positions.has(1)).toBe(true);

    // Verify an echo fighter is included
    expect(positions.has(3.5)).toBe(true);
  });

  it('should return positions with correct structure', () => {
    const positions = getAllCharacterPositions();
    const marioPos = positions.get(1);

    expect(marioPos).toBeDefined();
    expect(marioPos).toHaveProperty('row');
    expect(marioPos).toHaveProperty('col');
    expect(marioPos).toHaveProperty('x');
    expect(marioPos).toHaveProperty('y');
    expect(marioPos).toHaveProperty('width');
    expect(marioPos).toHaveProperty('height');
  });
});
