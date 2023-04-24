import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from  'react-redux'; //Keep treacks of the store which is the global state and it helps access from anywhere
import { legacy_createStore as createStore } from 'redux';
import {applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import App from './App';
import './index.css'

const store = createStore(reducers,compose(applyMiddleware(thunk))); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store  }>
    <App />
    </Provider>,
    
  </React.StrictMode>
);

