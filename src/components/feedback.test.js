import React from 'react';
import {shallow} from 'enzyme';

import {Feedback} from "./feedback";

describe("Feedback", () =>{
	it("Renders feedback  without crazhing",()=>{
		shallow(<Feedback />);
	});

	it("Renders text passed to feedback",()=>{
		const text = "test text";
		const wrapper = shallow(<Feedback feedback={text}/>);
		expect(wrapper.text()).toEqual(text + " Guess again!");
	});

	it("Renders just text passed to feedback if guess count is 0",()=>{
		const text = "test text";
		const wrapper = shallow(<Feedback feedback={text} guessCount={0}/>);
		expect(wrapper.text()).toEqual(text + " ");
	});
});