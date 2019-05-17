import React from 'react';
import { connect } from 'react-redux';  // Needed wherever components need to connect to the store to perform actions or read from the store.
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key = {expense.id} {...expense}/>;
                })
            )   
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};  // Function that maps the state provided by the store to props to be used in the component.  

export default connect(mapStateToProps)(ExpenseList); // connect returns the function that returns the HOC.
// argument inside connect should return an object defining what subset from the store that should be accessed.