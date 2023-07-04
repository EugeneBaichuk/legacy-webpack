import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Dogs } from '../Dogs';

describe('Cats component', () => {
  afterEach(cleanup);

  test('renders the header correctly', () => {
    const { asFragment } = render(<Dogs />);
    expect(asFragment(<Dogs />)).toMatchSnapshot();
  });
});