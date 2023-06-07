///<reference types="jest"/>


import * as React from 'react';
import { render } from '@testing-library/react';
import TestChild2 from '../components/TestChild2';


describe ("Child Component", () => {
  it ("should render child component", () => {
    render (<TestChild2/>)
  });

  it ("should contain Hello in content", () => {
    const {getByText} = render (<TestChild2/>);
    const text = getByText('Hello');
    expect(text).toBeDefined();
  })
})



