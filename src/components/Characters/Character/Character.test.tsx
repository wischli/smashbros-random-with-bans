/* eslint-disable no-undef */

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Character } from './Character-view';
import { color } from '../../../layout/themeStyle';
import { charArr } from '../../../model/charArr/charArr';
import { IChar } from '../../../types/Types';

configure({ adapter: new Adapter() });

describe('Testing Character Component', () => {
  // set default test data
  const context = {
    handleCharClick: jest.fn(),
  };
  let testChar: IChar;
  beforeEach(() => {
    [testChar] = charArr;
  });

  it('Checks enabled character', () => {
    const wrapper = shallow(<Character character={testChar} stateKey="enabled" charIndex={0} handleCharClick={context.handleCharClick} />);
    try {
      expect(wrapper.get(0).props.children.props.style.opacity).toEqual(1);
      expect(wrapper.get(0).props.style.backgroundColor).toBe(color.charEnabled);
    } catch (err) {
      expect(err).toBeUndefined();
    }
    expect(wrapper).toMatchSnapshot();
  });

  it('Checks disabled character', () => {
    const wrapper = shallow(<Character character={testChar} stateKey="disabled" charIndex={0} handleCharClick={context.handleCharClick} />);
    try {
      expect(wrapper.get(0).props.children.props.style.opacity).toEqual(0.6);
      expect(wrapper.get(0).props.style.backgroundColor).toBe(color.charDisabled);
    } catch (err) {
      expect(err).toBeUndefined();
    }
    expect(wrapper).toMatchSnapshot();
  });

  it('Checks played character', () => {
    const wrapper = shallow(<Character character={testChar} stateKey="played" charIndex={0} handleCharClick={context.handleCharClick} />);
    try {
      expect(wrapper.get(0).props.children.props.style.opacity).toEqual(0.6);
      expect(wrapper.get(0).props.style.backgroundColor).toBe(color.charPlayed);
    } catch (err) {
      expect(err).toBeUndefined();
    }
    expect(wrapper).toMatchSnapshot();
  });

  it('Checks hidden character', () => {
    const wrapper = shallow(<Character character={testChar} stateKey="hidden" charIndex={0} handleCharClick={context.handleCharClick} />);
    try {
      expect(wrapper.get(0).props.children.props.style.opacity).toEqual(0.6);
      expect(wrapper.get(0).props.style.backgroundColor).toBe(color.charHidden);
    } catch (err) {
      expect(err).toBeUndefined();
    }
    expect(wrapper).toMatchSnapshot();
  });
});
