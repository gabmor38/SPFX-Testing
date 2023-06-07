///<reference types="jest"/>

/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import TestChild2 from '../components/TestChild2';


describe ("Child Component", () => {
  it ("should render child component", () => {
    render (<TestChild2/>)
  })
})




