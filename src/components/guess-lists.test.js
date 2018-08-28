import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from "./guess-list";

describe("GuessList status", () =>{
	it("Renders GuessList status without crazhing",()=>{
		shallow(<GuessList guesses={[]}/>);
	});
	it("should render the guesses",()=>{
		const testGuesses = ["5","6","20","9"]; 
		const wrapper = shallow(<GuessList guesses={testGuesses} />);
		let counter = 0;
		wrapper.find("li").forEach((guess) => {
			expect(guess.text()).toEqual(testGuesses[counter]);
			counter+=1;
		});
		let guesses = wrapper.find("li");
		expect(guesses.length).toEqual(4);
	});
});