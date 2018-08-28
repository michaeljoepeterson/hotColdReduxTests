import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from "./guess-form";

describe("GuessForm status", () =>{
	it("Renders GuessForm status without crazhing",()=>{
		shallow(<GuessForm />);
	});

	it("should call the supplied callback on submit",()=>{
		const callback = jest.fn();
		const wrapper = mount(<GuessForm dispatch={callback} />);
		const value = "5";
		wrapper.find('#userGuess').instance().value = value;
		wrapper.simulate('submit');
		expect(callback).toHaveBeenCalledWith({guess:value,type:"MAKE_GUESS"});
	});

});