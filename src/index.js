import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import './App.css';
import App from './App';
import {API_WS_ROOT} from './constants';
// This readys a consumer that will connect against /cable on your backend server by default.
// const actionCable = {}
// actionCable.cable = ActionCable.createConsumer(API_WS_ROOT);
ReactDOM.render(
    <ActionCableProvider url={API_WS_ROOT}>
         <App />
    </ActionCableProvider>,
    document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

