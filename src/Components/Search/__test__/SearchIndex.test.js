import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import SearchIndex from '../SearchIndex';

const list = ['pen', 'marker', 'eraser', 'notebook', 'pencil' ];

describe('test search input', () => {
  beforeEach(() => {
    render(<SearchIndex list={list} />)
  });

  afterEach(cleanup);

  test('Component has header', () => {
    const header = screen.getByRole('heading');
    expect(header).toHaveTextContent(/results/i); 
  });

  test('Check input value',() => {
    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: 'example' } });
    expect(searchInput.value).toBe('example'); 
  });

  test('Check filtered list length',() => {
    const searchInput = screen.getByRole('textbox');
    const listElement = screen.getByRole('list');
    fireEvent.change(searchInput, { target: { value: 'pen' } });
    expect(listElement.children.length).toBe(2); 
  });
});