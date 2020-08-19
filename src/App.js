import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import World from './World';
import Header from './Header';
import Signup from './Signup';
import Footer from './Footer';
import Mlogin from './Mlogin';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route
            path='/original'
            component={() => {
              global.window &&
                (global.window.location.href =
                  'https://www.facebook.com/BabyVideos1/videos/1583253218559745/');
              return null;
            }}
          />
          <Route path='/'>
            <div className='mobile'>
              <Mlogin />
            </div>
            <div className='desktop'>
              <Header />
              <div className='main__body'>
                <World />
                <Signup />
              </div>
              <div className='main__footer'>
                <Footer />
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
