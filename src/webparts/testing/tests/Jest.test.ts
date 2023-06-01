///<reference types="jest"/>

import * as React from 'react';
import {configure } from 'enzyme';

import Testing from '../components/Testing';

configure({ adapter: new Adapter()});


describe('<Testing/>', () =>  {

 
  it('Testing should render a description', () => {
    
        console.log("ok")
  });
})

