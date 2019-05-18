import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    removeExpense = () => {
        this.props.removeExpense({id: this.props.expense.id}); 
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <ExpenseForm 
                    expense = {this.props.expense}
                    onSubmit = {this.onSubmit}
                />
                <button onClick = {this.removeExpense}>
                    Remove
                </button>
            </div>
        )
    }
}


const mapStatetoProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStatetoProps, mapDispatchToProps)(EditExpensePage);

// React router passes down components passed down in a route, including:
// history
// location - for use with hash values (example: localhost:8080/edit#contact-us) or search (example: localhost:8080/edit?query-rent&sort=date)
// match (for dynamic pages)