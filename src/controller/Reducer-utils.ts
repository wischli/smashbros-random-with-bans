import { IState } from '../types/Types';
import { randomize } from '../utils';

// reset played characters and shuffle
export const resetPlayed = (inputState: IState) => {
	const state = { ...inputState };
	state.enabled = randomize(
		state.played.map((charIndex: number) => {
			return charIndex;
		})
	);
	state.played = [];
	return state;
};
