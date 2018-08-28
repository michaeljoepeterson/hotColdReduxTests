import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from "./status-section";

describe("StatusSection status", () =>{
	it("Renders StatusSection status without crazhing",()=>{
		shallow(<StatusSection guesses={[]}/>);
	});

});