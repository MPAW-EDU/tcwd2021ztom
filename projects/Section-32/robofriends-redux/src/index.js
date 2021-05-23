import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore } from 'redux';
import { Provider, Connect } from 'react-redux';
import './index.css';
import 'tachyons';
import { searchRobots } from './redux/reducer';


const store = createStore(searchRobots);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
