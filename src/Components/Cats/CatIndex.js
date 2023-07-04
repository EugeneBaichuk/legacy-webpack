import React from 'react'
import CatList from './CatList'

const CatIndex = ({header, list}) => (
  <section>
    <h1>{header}</h1>
    <CatList cats={list}/>
  </section>
)

export default CatIndex
