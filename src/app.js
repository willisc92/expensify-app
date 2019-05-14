import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
const waterBill = {description : "Water Bill", amount: 4500};
const gasBill = {description : "Gas Bill", amount: 1000};
const rent = {description: "Rent", amount: 109500}

store.dispatch(addExpense(waterBill));
store.dispatch(addExpense(gasBill));
store.dispatch(addExpense(rent));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);  // Use provider to setup the store in the root of the application that is used by all other components.

ReactDOM.render(jsx, document.getElementById('app'));