import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Game } from './game.js';

window.renderTttgame = (containerId, history) => {
  ReactDOM.render(
    <Game />,
    document.getElementById(containerId),
  )
};

window.unmountTttgame = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if(!document.getElementById('Tttgame-container')){
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  )
};