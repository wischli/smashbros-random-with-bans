import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { initialCharState } from '../../model/charArr/charArr';
import { IState } from '../../types/Types';
import Bar from './Bar-view';

const context = {
  handleRandomizeClick: vi.fn(),
  handleEchoClick: vi.fn(),
  handleResetClick: vi.fn(),
  handleResetPlayedClick: vi.fn(),
  handleNextClick: vi.fn(),
  handleSelectionScreenToggle: vi.fn(),
  handleHelpClick: vi.fn(),
};

let state: IState;
beforeEach(() => {
  state = { ...initialCharState };
});

const renderBar = ({
  isRandomized,
  echo = true,
  showSelectionScreen = false,
  isRoundComplete = false,
}: {
  isRandomized: boolean;
  echo?: boolean;
  showSelectionScreen?: boolean;
  isRoundComplete?: boolean;
}) => {
  const { handleRandomizeClick, handleEchoClick, handleResetClick, handleResetPlayedClick, handleNextClick, handleSelectionScreenToggle, handleHelpClick } = context;
  return render(
    <Bar
      state={state}
      handleRandomizeClick={handleRandomizeClick}
      handleEchoClick={handleEchoClick}
      handleResetClick={handleResetClick}
      handleResetPlayedClick={handleResetPlayedClick}
      handleNextClick={handleNextClick}
      handleSelectionScreenToggle={handleSelectionScreenToggle}
      handleHelpClick={handleHelpClick}
      isRandomized={isRandomized}
      options={{ echo }}
      showSelectionScreen={showSelectionScreen}
      isRoundComplete={isRoundComplete}
    />
  );
};

describe('Testing Bar Component', () => {
  describe('Primary action button', () => {
    it('Shows Randomize button when not randomized', () => {
      renderBar({ isRandomized: false });
      const centerBtn = screen.getByTestId('centerBtn');
      expect(centerBtn).toBeDefined();
      expect(centerBtn.textContent).toBe('Randomize');
    });

    it('Shows Next Player button when randomized', () => {
      renderBar({ isRandomized: true });
      const centerBtn = screen.getByTestId('centerBtn');
      expect(centerBtn.textContent).toBe('Next Player');
    });
  });

  describe('View toggle button', () => {
    it('Shows Grid when in grid view', () => {
      renderBar({ isRandomized: false, showSelectionScreen: false });
      expect(screen.getByText('Grid')).toBeDefined();
    });

    it('Shows Screen when in screen view', () => {
      renderBar({ isRandomized: false, showSelectionScreen: true });
      expect(screen.getByText('Screen')).toBeDefined();
    });
  });

  describe('Menu button', () => {
    it('Shows burger menu button', () => {
      renderBar({ isRandomized: false });
      const menuBtn = screen.getByLabelText('Menu');
      expect(menuBtn).toBeDefined();
    });
  });

  describe('Round complete state', () => {
    it('Shows Reset All and New Round buttons when round is complete', () => {
      renderBar({ isRandomized: true, isRoundComplete: true });

      expect(screen.getByTestId('resetAllBtn')).toBeInTheDocument();
      expect(screen.getByTestId('resetPlayedBtn')).toBeInTheDocument();
      expect(screen.getByText('Reset All')).toBeInTheDocument();
      expect(screen.getByText('New Round')).toBeInTheDocument();
    });

    it('Does not show Next Player button when round is complete', () => {
      renderBar({ isRandomized: true, isRoundComplete: true });

      expect(screen.queryByTestId('centerBtn')).not.toBeInTheDocument();
      expect(screen.queryByText('Next Player')).not.toBeInTheDocument();
    });

    it('Shows Next Player button when randomized but round not complete', () => {
      renderBar({ isRandomized: true, isRoundComplete: false });

      expect(screen.getByTestId('centerBtn')).toBeInTheDocument();
      expect(screen.getByText('Next Player')).toBeInTheDocument();
      expect(screen.queryByTestId('resetAllBtn')).not.toBeInTheDocument();
    });
  });
});
