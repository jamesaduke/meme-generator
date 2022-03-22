import React from 'react';
import  TrollFace from  '../images/trollFace.png';


const Header = () => {
  return (
    <header className='header'>
        <img src={TrollFace} alt='troll face' />
        <h1>Meme Generator</h1>
        <h4>React Course - Project 3</h4>
    </header>
  )
}

export default Header