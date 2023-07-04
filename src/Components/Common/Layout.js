import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import './Layout.css';

const Layout = ({header, list, children }) => (
  <Container className="layout">
    <h1 className="mb-4 mt-4">{header}</h1>
    <ListGroup>
      {list.map((listItem, i) => (
        <ListGroupItem key={i}>
          {listItem}
        </ListGroupItem>
      ))}
    </ListGroup>
    <hr className="my-4" />
    {children}
  </Container>
)

export default Layout;
