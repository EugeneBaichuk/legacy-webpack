import React, { useEffect, useState } from 'react';
import { Input } from 'reactstrap';
import SearchList from './SearchList';

import './Search.css';

const SearchIndex = ({ list }) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [filteredList, setFilteredList] = useState(list);

  const handleInputChange = (e) => {
    setSearchInputValue(e.target.value);
  }

  useEffect(() => {
    const filteredList = searchInputValue ? 
      list.filter(item => item.includes(searchInputValue)):
      list;
    setFilteredList(filteredList);
  }, [searchInputValue]);

  return (
    <>
      <Input 
        className="mt-3" 
        value={searchInputValue} 
        placeholder='Search Here' 
        onChange={handleInputChange} 
      />
      <h3 className="m-3">Results: </h3>
      <SearchList filteredList={filteredList} />
    </>
  )
}

export default SearchIndex;