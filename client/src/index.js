import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
import reduxThunk from "redux-thunk"
import {Provider} from "react-redux";
const store=createStore(reducer,{},applyMiddleware(reduxThunk));



ReactDOM.render(
 <Provider store={store}>  <App /></Provider>
  
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
