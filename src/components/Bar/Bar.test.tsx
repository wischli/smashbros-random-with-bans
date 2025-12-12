import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { initialCharState } from '../../model/charArr/charArr';
import { IState } from '../../types/Types';
import Bar from './Bar-view';

const context = {
  handleRandomizeClick: vi.fn(),
  handleDisplayClick: vi.fn(),
  handleEchoClick: vi.fn(),
  handleResetClick: vi.fn(),
};

let state: IState;
beforeEach(() => {
  state = { ...initialCharState };
});

const renderBar = ({
  displayCard,
  displayRandomize,
  echo = true,
}: {
  displayCard: boolean;
  displayRandomize: boolean;
  echo?: boolean;
}) => {
  const { handleDisplayClick, handleRandomizeClick, handleEchoClick, handleResetClick } = context;
  return render(
    <Bar
      state={state}
      displayCard={displayCard}
      handleDisplayClick={handleDisplayClick}
      handleRandomizeClick={handleRandomizeClick}
      handleEchoClick={handleEchoClick}
      handleResetClick={handleResetClick}
      displayRandomize={displayRandomize}
      options={{ echo }}
    />
  );
};

describe('Testing Bar Component', () => {
  describe('It displays "Close Popup" on center button', () => {
    it('Tests displayCard: true, displayRandomize: true, echo: true', () => {
      renderBar({ displayCard: true, displayRandomize: true });
      const centerBtn = screen.getByTestId('centerBtn');
      expect(centerBtn).toBeDefined();
      expect(centerBtn.textContent).toBe('Close Popup');
    });

    it('Tests displayCard: true, displayRandomize: false, echo: true', () => {
      renderBar({ displayCard: true, displayRandomize: false });
      const centerBtn = screen.getByTestId('centerBtn');
      expect(centerBtn).toBeDefined();
      expect(centerBtn.textContent).toBe('Close Popup');
    });

    it('Tests displayCard: true, displayRandomize: true, echo: false', () => {
      renderBar({ displayCard: true, displayRandomize: true, echo: false });
      const centerBtn = screen.getByTestId('centerBtn');
      expect(centerBtn).toBeDefined();
      expect(centerBtn.textContent).toBe('Close Popup');
    });

    it('Tests displayCard: true, displayRandomize: false, echo: false', () => {
      renderBar({ displayCard: true, displayRandomize: false, echo: false });
      const centerBtn = screen.getByTestId('centerBtn');
      expect(centerBtn).toBeDefined();
      expect(centerBtn.textContent).toBe('Close Popup');
    });
  });

  describe('It displays "Show Popup" on center button', () => {
    it('Tests displayCard: false, displayRandomize: true, echo: true', () => {
      renderBar({ displayCard: false, displayRandomize: true });
      const centerBtn = screen.getByTestId('centerBtn');
      expect(centerBtn).toBeDefined();
      expect(centerBtn.textContent).toBe('Show Popup');
    });

    it('Tests displayCard: false, displayRandomize: true, echo: false', () => {
      renderBar({ displayCard: false, displayRandomize: true, echo: false });
      const centerBtn = screen.getByTestId('centerBtn');
      expect(centerBtn).toBeDefined();
      expect(centerBtn.textContent).toBe('Show Popup');
    });
  });

  describe('It displays "Randomize" on center button', () => {
    it('Tests displayCard: false, displayRandomize: false, echo: true', () => {
      renderBar({ displayCard: false, displayRandomize: false });
      const centerBtn = screen.getByTestId('centerBtn');
      expect(centerBtn).toBeDefined();
      expect(centerBtn.textContent).toBe('Randomize');
    });

    it('Tests displayCard: false, displayRandomize: false, echo: false', () => {
      renderBar({ displayCard: false, displayRandomize: false, echo: false });
      const centerBtn = screen.getByTestId('centerBtn');
      expect(centerBtn).toBeDefined();
      expect(centerBtn.textContent).toBe('Randomize');
    });
  });
});
