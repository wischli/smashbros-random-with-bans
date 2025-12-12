import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Character } from './Character-view';
import { charArr } from '../../../model/charArr/charArr';
import { IChar } from '../../../types/Types';

const context = {
  handleCharClick: vi.fn(),
};

let testChar: IChar;
beforeEach(() => {
  [testChar] = charArr;
});

describe('Testing Character Component', () => {
  it('Checks enabled character', () => {
    render(
      <Character
        character={testChar}
        stateKey="enabled"
        charIndex={0}
        handleCharClick={context.handleCharClick}
      />
    );
    const img = screen.getByAltText(testChar.name);
    expect(img).toBeDefined();
    expect(img).toHaveClass('enabled');
  });

  it('Checks disabled character', () => {
    const disabledChar = { ...testChar, enabled: false };
    render(
      <Character
        character={disabledChar}
        stateKey="disabled"
        charIndex={0}
        handleCharClick={context.handleCharClick}
      />
    );
    const img = screen.getByAltText(testChar.name);
    expect(img).toBeDefined();
    expect(img).toHaveClass('disabled');
  });

  it('Checks played character', () => {
    const playedChar = { ...testChar, played: true };
    render(
      <Character
        character={playedChar}
        stateKey="played"
        charIndex={0}
        handleCharClick={context.handleCharClick}
      />
    );
    const img = screen.getByAltText(testChar.name);
    expect(img).toBeDefined();
    expect(img).toHaveClass('played');
  });

  it('Checks hidden character', () => {
    render(
      <Character
        character={testChar}
        stateKey="hidden"
        charIndex={0}
        handleCharClick={context.handleCharClick}
      />
    );
    const img = screen.getByAltText(testChar.name);
    expect(img).toBeDefined();
  });
});
