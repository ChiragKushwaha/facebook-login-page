import React from 'react';
import './Footer.css';
import plus from './images/plus.png';
import adChoice from './images/ad.png';

function Footer() {
  return (
    <div className='footer'>
      <ul className='footer__top'>
        <li>English (UK)</li>
        <li>
          <a href='/' title='Hindi' >
            हिन्दी
          </a>
        </li>
        <li>
          <a href='/' title='Urdu'>
            اردو
          </a>
        </li>
        <li>
          <a href='/' title='Kannada'>
            ಕನ್ನಡ
          </a>
        </li>
        <li>
          <a href='/' title='Malayalam'>
            മലയാളം
          </a>
        </li>
        <li>
          <a href='/' title='Telugu'>
            తెలుగు
          </a>
        </li>
        <li>
          <a href='/' title='Tamil'>
            தமிழ்
          </a>
        </li>
        <li>
          <a href='/' title='Marathi'>
            मराठी
          </a>
        </li>
        <li>
          <a href='/' title='Gujarati'>
            ગુજરાતી
          </a>
        </li>
        <li>
          <a href='/' title='Bengali'>
            বাংলা
          </a>
        </li>
        <li>
          <a href='/' title='Punjabi'>
            ਪੰਜਾਬੀ
          </a>
        </li>
        <li>
          <a href='/'>
            <img className='end__image' src={plus} alt='facebook logo' />
          </a>
        </li>
      </ul>
      <div className='footer__divider'></div>
      <ul class='footer__mid'>
        <li>
          <a href='/' title='Sign up for Facebook'>
            Sign Up
          </a>
        </li>
        <li>
          <a href='/' title='Log in to Facebook'>
            Log In
          </a>
        </li>
        <li>
          <a href='/' title='Take a look at Messenger.'>
            Messenger
          </a>
        </li>
        <li>
          <a href='/' title='Facebook Lite for Android.'>
            Facebook Lite
          </a>
        </li>
        <li>
          <a href='/' title='Browse our Watch videos.'>
            Watch
          </a>
        </li>
        <li>
          <a href='/' title='Browse our people directory.'>
            People
          </a>
        </li>
        <li>
          <a href='/' title='Browse our Pages directory.'>
            Pages
          </a>
        </li>
        <li>
          <a href='/'>Page categories</a>
        </li>
        <li>
          <a href='/' title='Take a look at popular places on Facebook.'>
            Places
          </a>
        </li>
        <li>
          <a href='/' title='Check out Facebook games.'>
            Games
          </a>
        </li>
        <li>
          <a href='/' title='Browse our places directory.'>
            Locations
          </a>
        </li>
        <li>
          <a href='/' title='Buy and sell on Facebook Marketplace.'>
            Marketplace
          </a>
        </li>
        <li>
          <a href='/' title='Learn more about Facebook Pay'>
            Facebook Pay
          </a>
        </li>
        <li>
          <a href='/' title='Browse our Groups directory.'>
            Groups
          </a>
        </li>
        <li>
          <a href='/' title='Learn more about Oculus'>
            Oculus
          </a>
        </li>
        <li>
          <a href='/' title='Learn more about Portal from Facebook'>
            Portal
          </a>
        </li>
        <li>
          <a href='/' title='Take a look at Instagram'>
            Instagram
          </a>
        </li>
        <li>
          <a href='/' title='Browse our Local Lists directory.'>
            Local
          </a>
        </li>
        <li>
          <a href='/' title='Donate to worthy causes.'>
            Fundraisers
          </a>
        </li>
        <li>
          <a href='/' title='Browse our Facebook Services directory.'>
            Services
          </a>
        </li>
        <li>
          <a
            href='/'
            title='Read our blog, discover the resource centre and find job opportunities.'
          >
            About
          </a>
        </li>
        <li>
          <a href='/' title='Advertise on Facebook'>
            Create ad
          </a>
        </li>
        <li>
          <a href='/' title='Create a Page'>
            Create Page
          </a>
        </li>
        <li>
          <a href='/' title='Develop on our platform.'>
            Developers
          </a>
        </li>
        <li>
          <a
            href='/'
            title='Make your next career move to our brilliant company.'
          >
            Careers
          </a>
        </li>
        <li>
          <a href='/' title='Learn about your privacy and Facebook.'>
            Privacy
          </a>
        </li>
        <li>
          <a href='/' title='Learn about cookies and Facebook.'>
            Cookies
          </a>
        </li>
        <li>
          <a href='/' title='Learn about AdChoices.'>
            AdChoices
          </a>
          <span>
            <img className='adChoice' src={adChoice} alt='adChoice' />
          </span>
        </li>
        <li>
          <a href='/' title='Review our terms and policies.'>
            Terms
          </a>
        </li>
        <li>
          <a href='/' title='Visit our Help Centre.'>
            Help
          </a>
        </li>
        <li>
          <a href='/' title='View and edit your Facebook settings.'>
            Settings
          </a>
        </li>
        <li>
          <a href='/' title='View your activity log'>
            Activity log
          </a>
        </li>
      </ul>
      <div className='footer__copyright'>
        <span> Facebook © 2020</span>
      </div>
    </div>
  );
}

export default Footer;
