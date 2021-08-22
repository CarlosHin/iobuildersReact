import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore,compose } from 'redux';
import reducer from './reducers'


import './index.css';
let backend = {
  "users": [
    {
      "name":"Carlos","email":"carloshin98@gmail.com","password":"aaa",
      "balance": [
        {"simbol": "BTC", "ammount": 2},
        {"simbol": "LTC", "ammount": 20},
        {"simbol": "DOGE", "ammount": 700},
      ]
    },
    {
      "name":"Ivan","email":"ivan@io.builders","password":"12345",
      "balance": [
        {"simbol": "BTC", "ammount": 2}
      ]
    }
  ],
  "coins": [
    {"name":"Bitcoin","simbol":"BTC","logo":"btc.png","dollarValue":47366},
    {"name":"Litecoin","simbol":"LTC","logo":"ltc.png","dollarValue":300},
    {"name":"Ethereum","simbol":"ETH","logo":"eth.png","dollarValue":2500},
    {"name":"Dogecoin","simbol":"DOGE","logo":"doge.png","dollarValue":0.33},
    {"name":"Cardano","simbol":"ADA","logo":"ada.png","dollarValue":2.4}
  ]
};
//If  session storage rellenar
if (sessionStorage.getItem("backend")) {
  backend = JSON.parse(sessionStorage.getItem("backend"));
}
const initialState = {
  backend,
  myUser : {}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
