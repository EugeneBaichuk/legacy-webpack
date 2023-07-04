import React, {memo} from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const TodoList = ({questList, removeQuest, completed}) => (
  <ListGroup>
    {questList.map((quest, i) => (
      <ListGroupItem key={i}>
        {quest} &nbsp;
        <Button color="danger" size="sm" onClick={removeQuest(i)}>
          {completed}
        </Button>
      </ListGroupItem>
    ))}
  </ListGroup>
)

export default memo(TodoList);
