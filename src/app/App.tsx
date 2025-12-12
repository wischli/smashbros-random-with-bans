import { useReducer, useState, useEffect, useCallback } from 'react';
import Bar from '../components/Bar/Bar-view';
import Characters from '../components/Characters/Characters-view';
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

  // Reset handler with confirmation
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

  const handleCancelReset = () => {
    setShowResetDialog(false);
  };

  const handleSelectionScreenToggle = () => {
    setShowSelectionScreen(!showSelectionScreen);
  };

  return (
    <div className="wrapper">
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
        handleSelectionScreenToggle={handleSelectionScreenToggle}
        isRandomized={isRandomized}
        options={options}
        showSelectionScreen={showSelectionScreen}
      />
      <ResetDialog
        isOpen={showResetDialog}
        onConfirm={performReset}
        onCancel={handleCancelReset}
      />
    </div>
  );
};

export default App;
