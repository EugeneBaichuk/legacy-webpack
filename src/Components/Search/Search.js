import React from 'react';
import Layout from '../Common/Layout';
import SearchIndex from './SearchIndex';
import { searchHeader, searchTaskList } from '../../Config/search.constants';
import { searchList } from '../../Config/search.constants';

export const Search = () => (
  <Layout 
    header={searchHeader} 
    list={searchTaskList}  
  >
    <SearchIndex list={searchList} />
  </Layout>
)
