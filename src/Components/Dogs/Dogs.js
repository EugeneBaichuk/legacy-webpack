import React from 'react';
import DogIndex from './DogIndex';
import Layout from '../Common/Layout';
import { dogsHeader, dogsTaskList } from '../../Config/dogs.constants';
import { dogBtnText } from '../../Config/dogs.constants';

export const Dogs = () => (
  <Layout 
    header={dogsHeader} 
    list={dogsTaskList}  
  >
    <DogIndex text={dogBtnText}/>
  </Layout>
);

