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
test('Depositar vacio', () => {
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

  userEvent.click(screen.getByText(/Depositar Crypto/i), leftClick)
  expect(screen.getByText(/Depositar cripto/i)).toBeInTheDocument()
  
  userEvent.click(screen.getByText(/Bitcoin/i), leftClick)  
  expect(screen.getByText(/OK/i)).toBeInTheDocument()

  expect(screen.getByText(/Depositar Bitcoin/i)).toBeInTheDocument()
  userEvent.click(document.querySelector('.swal2-confirm'), leftClick)
  userEvent.click(document.querySelector('.swal2-deny'), leftClick)
  
  expect(screen.getByText(/Error/i)).toBeInTheDocument()


  userEvent.click(screen.getByText(/×/i), leftClick)
  userEvent.click(document.querySelector('#nav-logOut'), leftClick)
})

// test('Depositar', () => {
//     window.scrollTo = jest.fn()
//     render(
//       <Provider store ={store}>
//         <App />
//       </Provider>
//     )
  
//     const leftClick = {button: 0}
//     userEvent.click(document.querySelector('#nav-logIn'), leftClick)
  
//     const emailInput = document.querySelector('#email')
//     const passwordInput = document.querySelector('#password')
//     const submitBtn = document.querySelector('#submit')
//     fireEvent.change(emailInput, { 'target': { 'value': 'carloshin98@gmail.com' } });
//     fireEvent.change(passwordInput, { 'target': { 'value': 'aaa' } });
//     fireEvent.click(submitBtn);
//     expect(screen.getByText(/Ver Balance/i)).toBeInTheDocument()
  
//     userEvent.click(screen.getByText(/Depositar Crypto/i), leftClick)
//     expect(screen.getByText(/Depositar cripto/i)).toBeInTheDocument()
    
//     userEvent.click(screen.getByText(/Bitcoin/i), leftClick)
//     const cantidadInput = document.querySelector('#swal-input1') 
//     fireEvent.change(cantidadInput, { 'target': { 'value': '13' } });
//     expect(screen.getByText(/OK/i)).toBeInTheDocument()
//     console.log("cantidadInput", cantidadInput.value)

//     userEvent.click(screen.getByText(/OK/i), leftClick)
//     expect(screen.getByText(/Has depositado/i)).toBeInTheDocument()
  
    
  
    
//   })
