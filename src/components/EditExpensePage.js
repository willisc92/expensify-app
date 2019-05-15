import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm 
                expense = {props.expense}
                onSubmit = {(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick = {() => {
                props.dispatch(removeExpense({id: props.expense.id})); 
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

const mapStatetoProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStatetoProps)(EditExpensePage);

// React router passes down components passed down in a route, including:
// history
// location - for use with hash values (example: localhost:8080/edit#contact-us) or search (example: localhost:8080/edit?query-rent&sort=date)
// match (for dynamic pages)