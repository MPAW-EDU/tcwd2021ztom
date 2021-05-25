import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import 'tachyons';
import { searchRobots, requestRobots } from './redux/reducer';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots: searchRobots,requestRobots: requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
