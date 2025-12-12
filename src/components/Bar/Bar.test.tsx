import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { initialCharState } from '../../model/charArr/charArr';
import { IState } from '../../types/Types';
import Bar from './Bar-view';

const context = {
  handleRandomizeClick: vi.fn(),
  handleEchoClick: vi.fn(),
  handleResetClick: vi.fn(),
  handleSelectionScreenToggle: vi.fn(),
};

let state: IState;
beforeEach(() => {
  state = { ...initialCharState };
});

const renderBar = ({
  isRandomized,
  echo = true,
  showSelectionScreen = false,
}: {
  isRandomized: boolean;
  echo?: boolean;
  showSelectionScreen?: boolean;
}) => {
  const { handleRandomizeClick, handleEchoClick, handleResetClick, handleSelectionScreenToggle } = context;
  return render(
    <Bar
      state={state}
      handleRandomizeClick={handleRandomizeClick}
      handleEchoClick={handleEchoClick}
      handleResetClick={handleResetClick}
      handleSelectionScreenToggle={handleSelectionScreenToggle}
      isRandomized={isRandomized}
      options={{ echo }}
      showSelectionScreen={showSelectionScreen}
    />
  );
};

describe('Testing Bar Component', () => {
  describe('Randomize button', () => {
    it('Shows Randomize button when not randomized', () => {
      renderBar({ isRandomized: false });
      const centerBtn = screen.getByTestId('centerBtn');
      expect(centerBtn).toBeDefined();
      expect(centerBtn.textContent).toBe('Randomize');
    });

    it('Disables Randomize button when randomized', () => {
      renderBar({ isRandomized: true });
      const centerBtn = screen.getByTestId('centerBtn');
      expect(centerBtn).toHaveAttribute('disabled');
    });
  });

  describe('Echo button', () => {
    it('Shows "Hide Echoes" when echo is true', () => {
      renderBar({ isRandomized: false, echo: true });
      expect(screen.getByText('Hide Echoes')).toBeDefined();
    });

    it('Shows "Show Echoes" when echo is false', () => {
      renderBar({ isRandomized: false, echo: false });
      expect(screen.getByText('Show Echoes')).toBeDefined();
    });

    it('Disables echo button when randomized', () => {
      renderBar({ isRandomized: true, echo: true });
      const echoBtn = screen.getByText('Hide Echoes');
      expect(echoBtn).toHaveAttribute('disabled');
    });
  });

  describe('View toggle buttons', () => {
    it('Shows Grid and Screen buttons', () => {
      renderBar({ isRandomized: false });
      expect(screen.getByText('Grid')).toBeDefined();
      expect(screen.getByText('Screen')).toBeDefined();
    });

    it('Grid button is disabled when in grid view', () => {
      renderBar({ isRandomized: false, showSelectionScreen: false });
      const gridBtn = screen.getByText('Grid');
      expect(gridBtn).toHaveAttribute('disabled');
    });

    it('Screen button is disabled when in screen view', () => {
      renderBar({ isRandomized: false, showSelectionScreen: true });
      const screenBtn = screen.getByText('Screen');
      expect(screenBtn).toHaveAttribute('disabled');
    });
  });
});
