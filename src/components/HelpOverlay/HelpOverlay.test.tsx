import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HelpOverlay from './HelpOverlay';
import { helpItems } from './helpContent';

const defaultProps = {
  isOpen: true,
  onClose: vi.fn(),
  isRandomized: false,
  showSelectionScreen: false,
  options: { echo: true },
  hasPlayedChars: false,
  hasDisabledChars: false,
};

describe('HelpOverlay', () => {
  it('renders when isOpen is true', () => {
    render(<HelpOverlay {...defaultProps} />);

    expect(screen.getByText('How to Use')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(<HelpOverlay {...defaultProps} isOpen={false} />);

    expect(screen.queryByText('How to Use')).not.toBeInTheDocument();
  });

  it('renders all help items', () => {
    render(<HelpOverlay {...defaultProps} />);

    helpItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('calls onClose when backdrop is clicked', () => {
    const onClose = vi.fn();
    render(<HelpOverlay {...defaultProps} onClose={onClose} />);

    // Click the backdrop (overlay element)
    const overlay = document.querySelector('.help-overlay');
    fireEvent.click(overlay!);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when content is clicked', () => {
    const onClose = vi.fn();
    render(<HelpOverlay {...defaultProps} onClose={onClose} />);

    // Click the content area
    const content = document.querySelector('.help-content');
    fireEvent.click(content!);

    expect(onClose).not.toHaveBeenCalled();
  });

  it('calls onClose when "Got it!" button is clicked', () => {
    const onClose = vi.fn();
    render(<HelpOverlay {...defaultProps} onClose={onClose} />);

    const button = screen.getByText('Got it!');
    fireEvent.click(button);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('displays keyboard shortcut hint', () => {
    render(<HelpOverlay {...defaultProps} />);

    expect(screen.getByText(/Press F1 or \? anytime to toggle this help/)).toBeInTheDocument();
  });

  it('passes correct context when randomized', () => {
    render(<HelpOverlay {...defaultProps} isRandomized={true} />);

    // When randomized, "Show Echoes" should show the locked message
    expect(
      screen.getByText(/locked during randomization/i)
    ).toBeInTheDocument();
  });

  it('passes correct context when not randomized', () => {
    render(<HelpOverlay {...defaultProps} isRandomized={false} />);

    // When not randomized, "Reset Played" should show the disabled message
    expect(
      screen.getByText(/Start randomizing first to enable this option/i)
    ).toBeInTheDocument();
  });
});
