import React from 'react';
import {shallow} from 'enzyme';

import {AuralStatus} from "./aural-status";

//import store from '../store';

describe("Aural status", () =>{
	it("Renders aural status without crashing",()=>{
		shallow(<AuralStatus />);
	});

	it("Renders text passed to aural status",()=>{
		const text = "test text";
		const wrapper = shallow(<AuralStatus auralStatus={text} />);
		//wrapper.setState({auralStatus:text});
		//console.log("the text is " + wrapper.find("#status-readout").type());
		expect(wrapper.contains(text)).toEqual(true);
	});

});