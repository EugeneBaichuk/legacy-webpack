import React from 'react'
import MyImage from './../../static/MyProject.png'; 
import SvgImg from './../../static/svgImg.svg';

export const Home = () => {
  return (
    <div>
        <div>Home</div>
        <img src={MyImage} />
        <img src={SvgImg} />  
    </div>
  )
}
