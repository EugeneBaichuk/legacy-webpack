import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Cats } from '../Cats';

describe('Cats component', () => {
  afterEach(cleanup);

  test('renders the header correctly', () => {
    const { asFragment } = render(<Cats />);
    expect(asFragment(<Cats />)).toMatchSnapshot();
  });
});