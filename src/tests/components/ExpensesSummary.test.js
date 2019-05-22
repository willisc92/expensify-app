import { ExpensesSummary } from "../../components/ExpensesSummary";
import React from "react";
import expenses from "../fixtures/expenses";
import { shallow } from "enzyme";
import getExpenseTotal from "../../selectors/expenses-total";

test("Should test Expense Summary for one expenses", () => {
    const singleExpense = [expenses[0]];
    const expensesTotal = getExpenseTotal(singleExpense);
    const wrapper = shallow(<ExpensesSummary expenseCount={singleExpense.length} expensesTotal={expensesTotal} />);
    expect(wrapper).toMatchSnapshot();
});

test("Should test Expense Summary for multiple expenses", () => {
    const expensesTotal = getExpenseTotal(expenses);
    const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expensesTotal={expensesTotal} />);
    expect(wrapper).toMatchSnapshot();
});
