import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { createStore } from 'redux';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import backend from "../mock/backend"

import App from '../App.js'
import reducer from '../reducers'

const initialState = {
  backend,
  myUser : {}
}
const store = createStore(reducer, initialState);
test('Iniciar Sesión', () => {
window.scrollTo = jest.fn()
  render(
    <Provider store ={store}>
      <App />
    </Provider>
  )

  const leftClick = {button: 0}
  userEvent.click(document.querySelector('#nav-logIn'), leftClick)

  const emailInput = document.querySelector('#email')
  const passwordInput = document.querySelector('#password')
  const submitBtn = document.querySelector('#submit')
  fireEvent.change(emailInput, { 'target': { 'value': 'carloshin98@gmail.com' } });
  fireEvent.change(passwordInput, { 'target': { 'value': 'aaa' } });
  fireEvent.click(submitBtn);
  expect(screen.getByText(/Ver Balance/i)).toBeInTheDocument()
  userEvent.click(document.querySelector('#nav-logOut'), leftClick)

})
