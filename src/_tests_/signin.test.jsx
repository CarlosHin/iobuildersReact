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



test('Email repetido', () => {
    window.scrollTo = jest.fn()
    render(
      <Provider store ={store}>
        <App />
      </Provider>
    )
  
    const leftClick = {button: 0}
    userEvent.click(document.querySelector('#nav-signIn'), leftClick)
  
    const nameInput = document.querySelector('#name')
    const emailInput = document.querySelector('#email')
    const passwordInput = document.querySelector('#password')
    const submitBtn = document.querySelector('#submit')
    fireEvent.change(nameInput, { 'target': { 'value': 'Carlos' } });
    fireEvent.change(emailInput, { 'target': { 'value': 'carloshin98@gmail.com' } });
    fireEvent.change(passwordInput, { 'target': { 'value': '12345' } });
    fireEvent.click(submitBtn);
    expect(screen.getByText(/El usuario ya existe/i)).toBeInTheDocument()
    userEvent.click(screen.getByText(/De acuerdo/i), leftClick)
    
  })
  
  test('Registrarse', () => {
    window.scrollTo = jest.fn()
    render(
      <Provider store ={store}>
        <App />
      </Provider>
    )
  
    const leftClick = {button: 0}
    userEvent.click(document.querySelector('#nav-signIn'), leftClick)
  
    const nameInput = document.querySelector('#name')
    const emailInput = document.querySelector('#email')
    const passwordInput = document.querySelector('#password')
    const submitBtn = document.querySelector('#submit')
    fireEvent.change(nameInput, { 'target': { 'value': 'Carlos' } });
    fireEvent.change(emailInput, { 'target': { 'value': 'nuevo@gmail.com' } });
    fireEvent.change(passwordInput, { 'target': { 'value': '12345' } });
    fireEvent.click(submitBtn);
    expect(screen.getByText(/Ver Balance/i)).toBeInTheDocument()
    userEvent.click(document.querySelector('#nav-logOut'), leftClick)
  
  })
  
  