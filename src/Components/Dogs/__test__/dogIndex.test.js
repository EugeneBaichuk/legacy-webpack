import { render, cleanup, fireEvent, screen, waitFor, act } from '@testing-library/react';
import DogIndex from '../DogIndex';
import axios from 'axios';
import '@testing-library/jest-dom';

jest.mock("axios");

describe('dogIndex tests', () => {
  const text = 'Btn Text';
  const mockUrl1 = 'Url1';
  const mockUrl2 = 'Url2';

  afterEach(cleanup);

  test('render new Img after click', async() => {
    axios.get.mockResolvedValueOnce({data: {message: mockUrl1}}).mockResolvedValueOnce({data: {message: mockUrl2}});
    act(() => {
      render(<DogIndex text={text}/>)
    });

    const img = await screen.findByAltText('Dog');

    await waitFor(() => {
      expect(img.getAttribute('src')).toBe(mockUrl1);
    });
    
    act(() => {
      const btn = screen.getByText(text);
      fireEvent.click(btn);
    });

    await waitFor(() => {
      expect(img.getAttribute('src')).toBe(mockUrl2);
    });

  })
});