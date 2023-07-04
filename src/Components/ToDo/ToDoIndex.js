import React, { useCallback, useState } from 'react';
import { InputGroup, Input, Button } from 'reactstrap';
import TodoList from './TodoList';

const QuestList = ({completed, addQuestText}) => {
  const [questList, setQuestList]  = useState([]);
  const [todoInputValue, setTodoInputValue] = useState('');

  const handleChangeTodoInputValue = (e) => {
    setTodoInputValue(e.target.value);
  }

  const addQuest = (e) => {
    e.preventDefault();
    setQuestList(list => [...list, todoInputValue ]);
    setTodoInputValue('');
  }

  const removeQuest = useCallback((questId) => () => {
    setQuestList((prevList) => prevList.filter((_, id) => id !== questId));
  },[setQuestList]);

  return (
    <div className="content">
      <TodoList 
        questList={questList}
        removeQuest={removeQuest} 
        completed={completed} 
      />
      <hr />
      <form className="form" id="addQuestForm" onSubmit={addQuest}>
        <InputGroup>
          <Input
            value={todoInputValue}
            onChange={handleChangeTodoInputValue}
            type="text"
            className="input"
            id="addInput"
            placeholder="add to-do list item"
          />
          <Button color="info" type="submit" disabled={!todoInputValue}>
            {addQuestText}
          </Button>
        </InputGroup>
      </form>
    </div>
  )
}

export default QuestList;