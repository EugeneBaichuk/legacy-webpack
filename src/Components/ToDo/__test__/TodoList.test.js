import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import TodoList from '../TodoList';

const questList = ['Quest 1', 'Quest 2', 'Quest 3'];
const removeQuestMock = jest.fn();
const completed = 'Completed';

describe('TodoList', () => {
  beforeEach(() => {
    render(<TodoList questList={questList} removeQuest={removeQuestMock} completed={completed} />);
  });
  
  afterEach(cleanup);

  test('renders the list of quests', () => {
    questList.forEach((quest) => {
      const questElement = screen.getByText(quest);
      expect(questElement).toBeInTheDocument();
    });
  });
  
  test('calls removeQuest when the remove button is clicked', () => {
    const removeButtons = screen.getAllByRole('button');
    removeButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(removeQuestMock).toHaveBeenCalledWith(index);
    });
  });
});