import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import CatIndex from '../CatIndex';

describe('CatIndex', () => {
  const header = 'Raining Cats';
  const list = ['Whiskers', 'Fluffy', 'Garfield'];

  beforeEach(() => {
    render(<CatIndex header={header} list={list} />)
  });

  afterEach(cleanup);

  test('renders the header', () => {
    const headerElem = screen.getByRole('heading');
    expect(headerElem).toHaveTextContent(header);
  });

  test('renders the list of cats', () => {
    const listElement = screen.getByRole('list');
    expect(listElement.children.length).toBe(list.length);
  });
});



