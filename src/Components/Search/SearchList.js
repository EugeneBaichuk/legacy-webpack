import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

const SearchList = ({filteredList}) => (
  <ListGroup className="mt-3 mb-3 search-scroll border">
    {filteredList?.map((result, i) => <ListGroupItem key={i}>{result}</ListGroupItem>)}
  </ListGroup>
)

export default SearchList
