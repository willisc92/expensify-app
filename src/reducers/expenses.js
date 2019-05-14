// Expenses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]; // array spread operator syntax- equivalent to state.concat(action.expense).
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates   // object spread operator - copies/overrides key-values from object(s) into the new object
                        // requires "babel-plugin-transform-object-rest-spread" plugin
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

