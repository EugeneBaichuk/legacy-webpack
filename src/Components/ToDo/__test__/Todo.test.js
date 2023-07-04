import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ToDo } from '../ToDo';

describe('Cats component', () => {
  afterEach(cleanup);

  test('renders the header correctly', () => {
    const { asFragment } = render(<ToDo />);
    expect(asFragment(<ToDo />)).toMatchSnapshot();
  });
});