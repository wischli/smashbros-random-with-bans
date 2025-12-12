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
  const { handleRandomizeClick, handleEchoClick, handleResetClick, handleResetPlayedClick, handleNextClick, handleSelectionScreenToggle } = context;
  return render(
    <Bar
      state={state}
      handleRandomizeClick={handleRandomizeClick}
      handleEchoClick={handleEchoClick}
      handleResetClick={handleResetClick}
      handleResetPlayedClick={handleResetPlayedClick}
      handleNextClick={handleNextClick}
      handleSelectionScreenToggle={handleSelectionScreenToggle}
      isRandomized={isRandomized}
      options={{ echo }}
      showSelectionScreen={showSelectionScreen}
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

  describe('Settings button', () => {
    it('Shows settings gear button', () => {
      renderBar({ isRandomized: false });
      const settingsBtn = screen.getByLabelText('Settings');
      expect(settingsBtn).toBeDefined();
    });
  });
});
