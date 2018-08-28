import React from 'react';
import {shallow} from 'enzyme';

import InfoSection from "./info-section";

describe("InfoSection status", () =>{
	it("Renders InfoSection status without crazhing",()=>{
		shallow(<InfoSection />);
	});

});