import {render, screen} from '@testing-library/react'
import React from 'react'
import { createStore } from 'redux';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import backend from "../mock/backend"
import App from '../App.js'
import reducer from '../reducers'
window.scrollTo = jest.fn();
const initialState = {
  backend,
  myUser : {}
}
const store = createStore(reducer, initialState);

afterEach(() => {
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

test('Check App', () => {
  window.scrollTo = jest.fn()
  render(
    <Provider store ={store}>
      <App />
    </Provider>
  )
  expect(screen.getByText(/No has iniciado sesión/i)).toBeInTheDocument()
})
