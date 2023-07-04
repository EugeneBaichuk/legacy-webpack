import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CatList = ({cats}) => (
  <ListGroup>
    {cats.map((cat, i) => <ListGroupItem key={i}>{cat}</ListGroupItem>)}
  </ListGroup>
)

export default CatList;
