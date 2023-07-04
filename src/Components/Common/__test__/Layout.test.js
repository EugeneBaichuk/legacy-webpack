import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Layout from '../Layout';

describe('Layout component', () => {
  const mockHeader = 'Sample Header';
  const mockList = ['Item 1', 'Item 2', 'Item 3'];
  const mockChildren = <div>Sample Child</div>;

  beforeEach(() => {
    render(<Layout header={mockHeader} list={mockList}>{mockChildren}</Layout>);
  });

  afterEach(cleanup);

  test('renders the header prop', () => {
    expect(screen.getByText(mockHeader)).toBeInTheDocument();
  });

  test('renders the list prop', () => {
    mockList.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test('renders the children prop', () => {
    expect(screen.getByText(/sample child/i)).toBeInTheDocument();
  });
});