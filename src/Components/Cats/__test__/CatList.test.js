import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import CatList from '../CatList';

describe('CatList', () => {
  const list = ['Whiskers', 'Fluffy', 'Garfield'];

  beforeEach(() => {
    render(<CatList cats={list} />)
  });

  afterEach(cleanup);

  test('renders the list of cats', () => {
    const listElement = screen.getByRole('list');
    expect(listElement.children.length).toBe(list.length);
  });
});