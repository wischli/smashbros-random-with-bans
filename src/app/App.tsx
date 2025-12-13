import { useReducer, useState, useEffect, useCallback } from 'react';
import Bar from '../components/Bar/Bar-view';
import Characters from '../components/Characters/Characters-view';
import HelpOverlay from '../components/HelpOverlay/HelpOverlay';
import MainPageSelectionOverlay from '../components/MainPageSelectionOverlay/MainPageSelectionOverlay';
import RandomizedCharDisplay from '../components/RandomizedCharDisplay/RandomizedCharDisplay';
import ResetDialog from '../components/ResetDialog/ResetDialog';
import { Reducer } from '../controller/Reducer';
import { initialCharState } from '../model/charArr/charArr';
import { Action } from '../types/Actions';
import { IState } from '../types/Types';
import { loadState, saveState, loadViewPreference, saveViewPreference, loadRandomizedState, saveRandomizedState } from '../utils';
import { appStyle } from './App-styling';

const initialOptions = {
  echo: true,
};

const App = () => {
  // Load saved state or use initial state
  const getSavedOrInitialState = (): IState => {
    const saved = loadState();
    if (saved) {
      return {
        enabled: saved.enabled,
        played: saved.played,
        disabled: saved.disabled,
        hidden: saved.hidden,
      };
    }
    return initialCharState;
  };

  // State
  const [state, dispatch] = useReducer(Reducer, null, getSavedOrInitialState);
  const [options, setOptions] = useState(initialOptions);
  const [isRandomized, setIsRandomized] = useState(() => {
    // Load saved randomized state, or fallback to checking played characters
    const savedRandomized = loadRandomizedState();
    if (savedRandomized !== null) return savedRandomized;
    // Fallback: if we restored a state with played characters, randomization has started
    const saved = loadState();
    return saved !== null && saved.played.length > 0;
  });
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [showResetPlayedDialog, setShowResetPlayedDialog] = useState(false);
  const [showHelpOverlay, setShowHelpOverlay] = useState(false);
  const [showSelectionScreen, setShowSelectionScreen] = useState(() => {
    // Load saved view preference, or default to screen view if randomized
    const savedView = loadViewPreference();
    if (savedView !== null) return savedView;
    // Fallback: if randomization started, default to screen view
    const saved = loadState();
    return saved !== null && saved.played.length > 0;
  });

  // Auto-save state to localStorage on every state change
  useEffect(() => {
    saveState(state);
  }, [state]);

  // Auto-save view preference when it changes
  useEffect(() => {
    saveViewPreference(showSelectionScreen);
  }, [showSelectionScreen]);

  // Auto-save randomized state when it changes
  useEffect(() => {
    saveRandomizedState(isRandomized);
  }, [isRandomized]);

  // Keyboard shortcuts for help overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F1' || (e.shiftKey && e.key === '?')) {
        e.preventDefault();
        setShowHelpOverlay(prev => !prev);
      }
      if (e.key === 'Escape' && showHelpOverlay) {
        setShowHelpOverlay(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showHelpOverlay]);

  // Check if there are any selections (played or disabled characters)
  const hasSelections = useCallback((): boolean => {
    return state.played.length > 0 || state.disabled.length > 0;
  }, [state.played.length, state.disabled.length]);

  // Handlers
  const handleCharClick = (charIndex: number, charState: keyof IState) => {
    dispatch({ charIndex, charState, type: Action.toggleChar });
  };

  const handleRandomizeClick = () => {
    dispatch({ type: Action.randomize });
    setIsRandomized(true);
    setShowSelectionScreen(true); // Auto-switch to screen view
  };

  const handleEchoClick = () => {
    setOptions({ ...options, echo: !options.echo });
    dispatch({ type: Action.echo });
  };

  const handleNextClick = () => dispatch({ type: Action.next });
  const handlePrevClick = () => dispatch({ type: Action.previous });

  // Reset All handler with confirmation
  const handleResetClick = () => {
    if (hasSelections()) {
      setShowResetDialog(true);
    } else {
      performReset();
    }
  };

  const performReset = () => {
    dispatch({ type: Action.reset });
    setIsRandomized(false);
    setShowSelectionScreen(false); // Go back to grid view
    setShowResetDialog(false);
  };

  // Reset Played - keeps bans, reshuffles for new round
  const handleResetPlayedClick = () => {
    if (state.played.length > 0) {
      setShowResetPlayedDialog(true);
    } else {
      performResetPlayed();
    }
  };

  const performResetPlayed = () => {
    dispatch({ type: Action.resetPlayed });
    setShowResetPlayedDialog(false);
  };

  const handleCancelReset = () => {
    setShowResetDialog(false);
  };

  const handleCancelResetPlayed = () => {
    setShowResetPlayedDialog(false);
  };

  const handleHelpClick = () => {
    setShowHelpOverlay(true);
  };

  const [isViewTransitioning, setIsViewTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'to-screen' | 'to-grid'>('to-screen');

  const handleSelectionScreenToggle = () => {
    setTransitionDirection(showSelectionScreen ? 'to-grid' : 'to-screen');
    setIsViewTransitioning(true);
    setTimeout(() => {
      setShowSelectionScreen(!showSelectionScreen);
      setTimeout(() => setIsViewTransitioning(false), 50);
    }, 180);
  };

  const viewTransitionClass = isViewTransitioning
    ? `view-exit-${transitionDirection}`
    : 'view-enter';

  return (
    <div className="wrapper">
      <div className={`view-container ${viewTransitionClass}`}>
        {showSelectionScreen ? (
          <MainPageSelectionOverlay
            state={state}
            handleCharClick={handleCharClick}
            isRandomized={isRandomized}
          />
        ) : (
          <div className="content" style={appStyle(false)}>
            <Characters
              state={state}
              handleCharClick={handleCharClick}
              isRandomized={isRandomized}
              currentCharIndex={state.enabled[0]}
            />
          </div>
        )}
      </div>
      {/* Randomized character display - shown below views when randomized */}
      {isRandomized && (
        <RandomizedCharDisplay
          state={state}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
      )}
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
        options={options}
        showSelectionScreen={showSelectionScreen}
      />
      <ResetDialog
        isOpen={showResetDialog}
        onConfirm={performReset}
        onCancel={handleCancelReset}
        title="Reset All?"
        message="This will clear all bans, played characters, and start fresh. Are you sure?"
        confirmText="Reset All"
        confirmColor="#e74c3c"
      />
      <ResetDialog
        isOpen={showResetPlayedDialog}
        onConfirm={performResetPlayed}
        onCancel={handleCancelResetPlayed}
        title="Start New Round?"
        message="This will reshuffle all played characters back into the pool. Your bans will be kept. Continue?"
        confirmText="New Round"
        confirmColor="#51cf66"
      />
      <HelpOverlay
        isOpen={showHelpOverlay}
        onClose={() => setShowHelpOverlay(false)}
        isRandomized={isRandomized}
        showSelectionScreen={showSelectionScreen}
        options={options}
        hasPlayedChars={state.played.length > 0}
        hasDisabledChars={state.disabled.length > 0}
      />
    </div>
  );
};

export default App;
