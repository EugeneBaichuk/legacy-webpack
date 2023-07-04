import React from 'react';
import Layout from '../Common/Layout';
import CatIndex from './CatIndex'
import { catsHeader, catsTaskList } from '../../Config/cats.constants';
import { breedsList, catsText } from '../../Config/cats.constants'

export const Cats = () => (
  <Layout 
    header={catsHeader} 
    list={catsTaskList}>
    <CatIndex list={breedsList} header={catsText} /> 
  </Layout>
)

