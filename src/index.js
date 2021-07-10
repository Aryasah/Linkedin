import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';


const hideLoader = () => loader.classList.add('loader--hide');

const loader = document.querySelector('.loader');
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


setTimeout(() => 
  // the show/hide functions are passed as props
  ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
    <App
      hideLoader={hideLoader}
      />
      </Provider>
     </React.StrictMode>,
    document.getElementById('root')
  )
, 2000);

serviceWorker.unregister();