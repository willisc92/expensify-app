import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);  // Use provider to setup the store in the root of the application that is used by all other components.

ReactDOM.render(jsx, document.getElementById('app'));