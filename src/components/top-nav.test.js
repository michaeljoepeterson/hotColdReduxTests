import React from 'react';
import {shallow,mount} from 'enzyme';

import {TopNav} from "./top-nav";

describe("TopNav status", () =>{
	it("Renders TopNav status without crazhing",()=>{
		shallow(<TopNav />);
	});

	it("Should fire correct callback on new game click", ()=>{
		const callback = jest.fn();
		const wrapper = mount(<TopNav dispatch={callback} />);
		wrapper.find('.new').simulate('click');
		expect(callback).toHaveBeenCalled();
	});
	it("Should fire correct callback on updating aural status", ()=>{
		const callback = jest.fn();
		const wrapper = mount(<TopNav dispatch={callback} />);
		wrapper.find('.visuallyhidden').simulate('click');
		expect(callback).toHaveBeenCalled();
	});

});