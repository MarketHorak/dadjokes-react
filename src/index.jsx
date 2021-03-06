import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import user from './users//user01.png';

const App = () => { 
  return (
  <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={user}/>
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button id="btn-up" className="btn-like btn-like--up"></button>
          <span id="likes-up" className="likes-count likes-count--up">0</span>
          <button id="btn-down" className="btn-like btn-like--down"></button>
          <span id="likes-down" className="likes-count likes-count--down">0</span>
        </div>
      </div>
    </div>
);
};

render(<App />, document.querySelector('#app'));
