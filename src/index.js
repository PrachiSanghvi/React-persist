import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

// we might want to delay the rendering of our app’s UI 
// until the persisted data is available in the Redux store.
//  For that, Redux Persist includes the PersistGate component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);