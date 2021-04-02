import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import 'tachyons';

import { robots } from './robots';

ReactDOM.render(
  <React.StrictMode>
    {robots.map(robot => {
      return (
        <Card 
          key={robot.id}
          name={robot.name}
          username={robot.username}
          email={robot.email}
        />
      )
    })}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
