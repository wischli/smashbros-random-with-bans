import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HelpAnnotation from './HelpAnnotation';
import { HelpItem, HelpContext } from './types';

const baseContext: HelpContext = {
  isRandomized: false,
  showSelectionScreen: false,
  echoEnabled: true,
  hasPlayedChars: false,
  hasDisabledChars: false,
};

const baseItem: HelpItem = {
  id: 'test-item',
  title: 'Test Title',
  icon: '?',
  description: 'Test description text',
};

describe('HelpAnnotation', () => {
  it('renders title and description', () => {
    render(<HelpAnnotation item={baseItem} context={baseContext} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description text')).toBeInTheDocument();
  });

  it('renders the icon', () => {
    render(<HelpAnnotation item={baseItem} context={baseContext} />);

    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('shows conditional content when condition is true', () => {
    const itemWithCondition: HelpItem = {
      ...baseItem,
      conditionalContent: [
        {
          condition: (ctx) => ctx.isRandomized,
          content: 'This shows when randomized',
        },
      ],
    };

    render(
      <HelpAnnotation
        item={itemWithCondition}
        context={{ ...baseContext, isRandomized: true }}
      />
    );

    expect(screen.getByText('This shows when randomized')).toBeInTheDocument();
  });

  it('hides conditional content when condition is false', () => {
    const itemWithCondition: HelpItem = {
      ...baseItem,
      conditionalContent: [
        {
          condition: (ctx) => ctx.isRandomized,
          content: 'This shows when randomized',
        },
      ],
    };

    render(
      <HelpAnnotation
        item={itemWithCondition}
        context={{ ...baseContext, isRandomized: false }}
      />
    );

    expect(screen.queryByText('This shows when randomized')).not.toBeInTheDocument();
  });

  it('renders multiple conditional content items when conditions are met', () => {
    const itemWithMultipleConditions: HelpItem = {
      ...baseItem,
      conditionalContent: [
        {
          condition: (ctx) => ctx.isRandomized,
          content: 'Randomized content',
        },
        {
          condition: (ctx) => ctx.hasPlayedChars,
          content: 'Has played chars content',
        },
        {
          condition: (ctx) => !ctx.echoEnabled,
          content: 'Echo disabled content',
        },
      ],
    };

    render(
      <HelpAnnotation
        item={itemWithMultipleConditions}
        context={{
          ...baseContext,
          isRandomized: true,
          hasPlayedChars: true,
          echoEnabled: true, // This one should NOT show
        }}
      />
    );

    expect(screen.getByText('Randomized content')).toBeInTheDocument();
    expect(screen.getByText('Has played chars content')).toBeInTheDocument();
    expect(screen.queryByText('Echo disabled content')).not.toBeInTheDocument();
  });

  it('renders with warning styling when isWarning is true', () => {
    const itemWithWarning: HelpItem = {
      ...baseItem,
      conditionalContent: [
        {
          condition: () => true,
          content: 'Warning message',
          isWarning: true,
        },
      ],
    };

    render(<HelpAnnotation item={itemWithWarning} context={baseContext} />);

    const warningElement = screen.getByText('Warning message');
    expect(warningElement).toBeInTheDocument();
    // Warning style has yellow background (#fff3cd) and yellow border (#ffc107)
    expect(warningElement).toHaveStyle({ backgroundColor: '#fff3cd' });
  });

  it('renders with info styling when isWarning is false', () => {
    const itemWithInfo: HelpItem = {
      ...baseItem,
      conditionalContent: [
        {
          condition: () => true,
          content: 'Info message',
          isWarning: false,
        },
      ],
    };

    render(<HelpAnnotation item={itemWithInfo} context={baseContext} />);

    const infoElement = screen.getByText('Info message');
    expect(infoElement).toBeInTheDocument();
    // Info style has green background (#e8f5e9) and green border (#51cf66)
    expect(infoElement).toHaveStyle({ backgroundColor: '#e8f5e9' });
  });

  it('handles items with no conditional content', () => {
    render(<HelpAnnotation item={baseItem} context={baseContext} />);

    // Should render without errors
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
