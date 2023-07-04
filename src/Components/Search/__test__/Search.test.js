import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Search } from '../Search';

describe('Cats component', () => {
  afterEach(cleanup);

  test('renders the header correctly', () => {
    const { asFragment } = render(<Search />);
    expect(asFragment(<Search />)).toMatchSnapshot();
  });
});