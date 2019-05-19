import getExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 for no expenses', () => {
    const noExpenses = [];
    const result = getExpenseTotal(noExpenses);
    expect(result).toBe(0); 
});

test('Should return the cost of the single expense', () => {
    const result = getExpenseTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount); 
});

test('Should return the cost of all expenses', () => {
    const result = getExpenseTotal(expenses);
    expect(result).toBe(114195); 
});