import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchList from '../SearchList';

const list = ['pen', 'marker', 'eraser', 'notebook', 'pencil'];

describe('SearchList tests', () => {
  beforeEach(() => {
    render(<SearchList filteredList={list}/>)
  });

  test('List elements count', () => {
    list.forEach((item) => {
      const listItem = screen.getByText(item);
      expect(listItem).toBeInTheDocument();
    });
  });
});