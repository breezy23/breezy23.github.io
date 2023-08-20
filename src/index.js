import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './views/home/home.jsx';
import store from './store.js';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Home />
        </React.StrictMode>
    </Provider>
);
