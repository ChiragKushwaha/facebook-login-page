import React from 'react';
import './World.css';
import WorldImg from './images/map.png';

function World() {
  return (
    <div className='world'>
      <div className='world__text'>
        Facebook helps you connect and share with the people in your life.
      </div>
      <img className='world__logo' src={WorldImg} alt='World' />
    </div>
  );
}

export default World;
