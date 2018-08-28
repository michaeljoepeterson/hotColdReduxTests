import React from 'react';
import {shallow} from 'enzyme';

import Header from "./header";

describe("Header status", () =>{
	it("Renders Header status without crazhing",()=>{
		shallow(<Header />);
	});

});