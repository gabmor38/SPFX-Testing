///<reference types="jest"/>


import * as React from 'react';
import { render, screen } from '@testing-library/react';
import TestChild2 from '../components/TestChild2';
import Testing from '../components/Testing';


describe ("Child Component", () => {
  it ("should render child component", () => {
    render (<TestChild2/>)
  });

  it ("should contain Hello in content", () => {
    const {getByText} = render (<TestChild2/>);
    const text = getByText('Hello');
    expect(text).toBeDefined();
  });
});

describe('it renders an h3 element with the correct data-testid', () => {
  it("should render Parent", () => {
    render(<Testing description={''} isDarkTheme={false} environmentMessage={''} hasTeamsContext={false} userDisplayName={''} />);
  });

  it("should render an h3 element with the correct data-testid", () => {
    render(<Testing description={''} isDarkTheme={false} environmentMessage={''} hasTeamsContext={false} userDisplayName={''} />);
    const h3Element = screen.getByTestId('h3');
    expect(h3Element.tagName).toBe('H3');
  });
});



