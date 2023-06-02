///<reference types="jest"/>

import * as React from 'react';
import { ReactWrapper } from 'enzyme';

import Testing from '../components/Testing';
import { ITestingProps } from '../components/ITestingProps';

// configure({ adapter: new Adapter() });


describe('<Testing/>', () =>  {

  let reactComponent : ReactWrapper<ITestingProps>;
 
  it('Testing should render a welcome title', () => {
    
      const cssSelector: string =  'h3';

      const text = reactComponent.find(cssSelector).text();

      expect(text).toBe('Welcome to SharePoint Framework!')
  });
})

