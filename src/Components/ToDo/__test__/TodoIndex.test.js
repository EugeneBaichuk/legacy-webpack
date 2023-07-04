import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import QuestList from '../ToDoIndex';

const completed = 'Quest completed!';
const addQuestText = 'Add Quest';
const value = 'New Quest';

describe('QuestList', () => {
  let todoInput = null;
  let addQuestButton = null;

  beforeEach(() => {
    render(<QuestList completed={completed} addQuestText={addQuestText}/>);
    todoInput = screen.getByPlaceholderText('add to-do list item');
    addQuestButton = screen.getByText(/add quest/i);
    fireEvent.change(todoInput, { target: { value } });
    fireEvent.click(addQuestButton);
  });
      
  afterEach(cleanup);

  test('renders the add quest form and adds a quest to the list', () => {     
    const questListItem = screen.getByRole('listitem');
    expect(questListItem).toHaveTextContent(value);
  });
  
  test('removes a quest from the list', () => {
    fireEvent.change(todoInput, { target: { value: 'Quest2' } });
    fireEvent.click(addQuestButton);

    const list = screen.getAllByRole('listitem');
    const removeButtons = screen.getAllByText(completed);

    fireEvent.click(removeButtons[0]);

    const newList = screen.getAllByRole('listitem');
  
    expect(list.length - 1).toBe(newList.length);
  });
});