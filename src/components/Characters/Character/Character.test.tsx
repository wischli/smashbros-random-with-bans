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
  it('Checks enabled character renders correctly', () => {
    const { container } = render(
      <Character
        character={testChar}
        stateKey="enabled"
        charIndex={0}
        handleCharClick={context.handleCharClick}
      />
    );
    const img = screen.getByAltText(testChar.name);
    expect(img).toBeDefined();
    // Enabled characters have a transparent overlay
    const wrapper = container.querySelector('.character');
    expect(wrapper).toBeDefined();
  });

  it('Checks disabled character renders correctly', () => {
    const disabledChar = { ...testChar, enabled: false };
    const { container } = render(
      <Character
        character={disabledChar}
        stateKey="disabled"
        charIndex={0}
        handleCharClick={context.handleCharClick}
      />
    );
    const img = screen.getByAltText(testChar.name);
    expect(img).toBeDefined();
    // Disabled characters have a grey overlay
    const wrapper = container.querySelector('.character');
    expect(wrapper).toBeDefined();
  });

  it('Checks played character renders correctly', () => {
    const playedChar = { ...testChar, played: true };
    const { container } = render(
      <Character
        character={playedChar}
        stateKey="played"
        charIndex={0}
        handleCharClick={context.handleCharClick}
      />
    );
    const img = screen.getByAltText(testChar.name);
    expect(img).toBeDefined();
    // Played characters have a red overlay
    const wrapper = container.querySelector('.character');
    expect(wrapper).toBeDefined();
  });

  it('Checks hidden character renders correctly', () => {
    const { container } = render(
      <Character
        character={testChar}
        stateKey="hidden"
        charIndex={0}
        handleCharClick={context.handleCharClick}
      />
    );
    const img = screen.getByAltText(testChar.name);
    expect(img).toBeDefined();
    // Hidden characters have a faded red overlay
    const wrapper = container.querySelector('.character');
    expect(wrapper).toBeDefined();
  });
});
