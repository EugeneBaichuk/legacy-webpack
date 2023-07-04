import React from 'react';
import Layout from '../Common/Layout';
import ToDoIndex from './ToDoIndex';
import { todoHeader, todoTasksList } from '../../Config/todo.constants';
import { completed, addQuestText } from '../../Config/todo.constants';

export const ToDo = () => (
  <Layout 
    header={todoHeader} 
    list={todoTasksList} 
  >
    <ToDoIndex completed={completed} addQuestText={addQuestText}/>
  </Layout>
)
