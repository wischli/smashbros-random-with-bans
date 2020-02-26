/* eslint-disable no-undef */

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { initialCharState } from '../../model/charArr/charArr';
import { IState } from '../../types/Types';
import Bar from './Bar-view';

configure({ adapter: new Adapter() });

// set default test data
const context = {
	handleRandomizeClick: jest.fn(),
	handleDisplayClick: jest.fn(),
	handleEchoClick: jest.fn()
};
let state: IState;
beforeEach(() => {
	state = { ...initialCharState };
});

const setBtn = ({
	displayCard,
	displayRandomize,
	echo = true
}: {
	displayCard: boolean;
	displayRandomize: boolean;
	echo?: boolean;
}) => {
	const { handleDisplayClick, handleRandomizeClick, handleEchoClick } = context
	return (
		<Bar
			state={state}
			displayCard={displayCard}
			handleDisplayClick={handleDisplayClick}
			handleRandomizeClick={handleRandomizeClick}
			handleEchoClick={handleEchoClick}
			displayRandomize={displayRandomize}
			options={{ echo }}
		/>
	);
};

describe('Testing Bar Component', () => {
	describe('It displays "Close Popup" on center button', () => {
		it('Tests displayCard: true, displayRandomize: true, echo: true', () => {
			const wrapper = shallow(setBtn({ displayCard: true, displayRandomize: true }));
			const centerBtn = wrapper.find('[data-test="centerBtn"]');
			expect(centerBtn).toBeDefined();
			expect(centerBtn.text()).toBe('Close Popup');
			expect(wrapper).toMatchSnapshot();
		});
		it('Tests displayCard: true, displayRandomize: false, echo: true', () => {
			const wrapper = shallow(setBtn({ displayCard: true, displayRandomize: false }));
			const centerBtn = wrapper.find('[data-test="centerBtn"]');
			expect(centerBtn).toBeDefined();
			expect(centerBtn.text()).toBe('Close Popup');
			expect(wrapper).toMatchSnapshot();
		});
		it('Tests displayCard: true, displayRandomize: true, echo: false', () => {
			const wrapper = shallow(setBtn({ displayCard: true, displayRandomize: true }));
			const centerBtn = wrapper.find('[data-test="centerBtn"]');
			expect(centerBtn).toBeDefined();
			expect(centerBtn.text()).toBe('Close Popup');
			expect(wrapper).toMatchSnapshot();
		});
		it('Tests displayCard: true, displayRandomize: false, echo: false', () => {
			const wrapper = shallow(setBtn({ displayCard: true, displayRandomize: false }));
			const centerBtn = wrapper.find('[data-test="centerBtn"]');
			expect(centerBtn).toBeDefined();
			expect(centerBtn.text()).toBe('Close Popup');
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('It displays "Show Popup" on center button', () => {
		it('Tests displayCard: false, displayRandomize: true, echo: true', () => {
			const wrapper = shallow(setBtn({ displayCard: false, displayRandomize: true }));
			const centerBtn = wrapper.find('[data-test="centerBtn"]');
			expect(centerBtn).toBeDefined();
			expect(centerBtn.text()).toBe('Show Popup');
			expect(wrapper).toMatchSnapshot();
		});
		it('Tests displayCard: false, displayRandomize: true, echo: false', () => {
			const wrapper = shallow(setBtn({ displayCard: false, displayRandomize: true }));
			const centerBtn = wrapper.find('[data-test="centerBtn"]');
			expect(centerBtn).toBeDefined();
			expect(centerBtn.text()).toBe('Show Popup');
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('It displays "Randomize" on center button', () => {
		it('Tests displayCard: false, displayRandomize: false, echo: true', () => {
			const wrapper = shallow(setBtn({ displayCard: false, displayRandomize: false }));
			const centerBtn = wrapper.find('[data-test="centerBtn"]');
			expect(centerBtn).toBeDefined();
			expect(centerBtn.text()).toBe('Randomize');
			expect(wrapper).toMatchSnapshot();
		});
		it('Tests displayCard: false, displayRandomize: false, echo: false', () => {
			const wrapper = shallow(setBtn({ displayCard: false, displayRandomize: false }));
			const centerBtn = wrapper.find('[data-test="centerBtn"]');
			expect(centerBtn).toBeDefined();
			expect(centerBtn.text()).toBe('Randomize');
			expect(wrapper).toMatchSnapshot();
		});
	});
});
