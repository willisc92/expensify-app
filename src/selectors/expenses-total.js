const getSum = (total, num) => total + num;

export default (expenses) => {
    return expenses.map((expense) => expense.amount).reduce(getSum, 0);
};
