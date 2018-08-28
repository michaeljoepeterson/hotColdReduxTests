import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from "./guess-count";

describe("GuessCount status", () =>{
	it("Renders GuessCount status without crazhing",()=>{
		shallow(<GuessCount />);
	});

	it("should render with guess count and correct noun", () =>{
		const num = 5
		const wrapper = shallow(<GuessCount guessCount={num}/>);
		expect(wrapper.text()).toEqual("You've made 5 guesses!");
	});
});