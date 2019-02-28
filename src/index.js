import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //needed to use the Provider component

import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  //Provider component comes from React Redux library -- alerts Redux app when there's a change to state && will render our React app
  //pass store instance as a prop to make it available to all other components
  <Provider store={store}> 

    <App />
  </Provider>,
  document.getElementById('root')
);


//use the connect function to specify which components update due to change in state
//connect function used to connect component to store -- get data from store's internal state and told to re-render and get new data when state changes