import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import ResetDialog from './ResetDialog';

const defaultProps = {
  isOpen: true,
  onConfirm: vi.fn(),
  onCancel: vi.fn(),
};

describe('ResetDialog', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('does not render when isOpen is false', () => {
    render(<ResetDialog {...defaultProps} isOpen={false} />);

    expect(screen.queryByText('Reset Selection?')).not.toBeInTheDocument();
  });

  it('renders with default props when isOpen is true', () => {
    render(<ResetDialog {...defaultProps} />);

    expect(screen.getByText('Reset Selection?')).toBeInTheDocument();
    expect(screen.getByText(/characters that have been played or disabled/)).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('renders with custom title, message, and button text', () => {
    render(
      <ResetDialog
        {...defaultProps}
        title="Custom Title"
        message="Custom message text"
        confirmText="Confirm Action"
      />
    );

    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom message text')).toBeInTheDocument();
    expect(screen.getByText('Confirm Action')).toBeInTheDocument();
  });

  it('calls onCancel when Cancel button is clicked', () => {
    const onCancel = vi.fn();
    render(<ResetDialog {...defaultProps} onCancel={onCancel} />);

    fireEvent.click(screen.getByText('Cancel'));

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('calls onCancel when backdrop is clicked', () => {
    const onCancel = vi.fn();
    const { container } = render(<ResetDialog {...defaultProps} onCancel={onCancel} />);

    // Click the overlay (first div with fixed positioning)
    const overlay = container.firstChild;
    fireEvent.click(overlay!);

    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('does not call onCancel when dialog content is clicked', () => {
    const onCancel = vi.fn();
    render(<ResetDialog {...defaultProps} onCancel={onCancel} />);

    // Click the dialog title (inside content area)
    fireEvent.click(screen.getByText('Reset Selection?'));

    expect(onCancel).not.toHaveBeenCalled();
  });

  it('calls onConfirm after delay when confirm button is clicked', async () => {
    const onConfirm = vi.fn();
    render(<ResetDialog {...defaultProps} onConfirm={onConfirm} />);

    fireEvent.click(screen.getByText('Reset'));

    // Should not be called immediately
    expect(onConfirm).not.toHaveBeenCalled();

    // Advance timers by 600ms (the confirmation delay)
    act(() => {
      vi.advanceTimersByTime(600);
    });

    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  it('disables buttons during confirmation', () => {
    render(<ResetDialog {...defaultProps} />);

    const confirmButton = screen.getByText('Reset');
    const cancelButton = screen.getByText('Cancel');

    fireEvent.click(confirmButton);

    // Buttons should be disabled during confirmation
    expect(confirmButton).toBeDisabled();
    expect(cancelButton).toBeDisabled();
  });

  it('prevents backdrop click during confirmation', () => {
    const onCancel = vi.fn();
    const { container } = render(<ResetDialog {...defaultProps} onCancel={onCancel} />);

    // Start confirmation
    fireEvent.click(screen.getByText('Reset'));

    // Try to click backdrop during confirmation
    const overlay = container.firstChild;
    fireEvent.click(overlay!);

    // Should not call onCancel during confirmation
    expect(onCancel).not.toHaveBeenCalled();
  });

  it('applies custom confirm color', () => {
    render(
      <ResetDialog {...defaultProps} confirmColor="#51cf66" confirmText="Go" />
    );

    const confirmButton = screen.getByText('Go');
    expect(confirmButton).toHaveStyle({ backgroundColor: '#51cf66' });
  });
});
