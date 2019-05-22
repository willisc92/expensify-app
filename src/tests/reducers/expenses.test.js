import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expenses if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "not existing"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
    const expense = {
        id: "4",
        description: "New",
        note: "",
        amount: 200,
        createdAt: 0
    };
    const action = {
        type: "ADD_EXPENSE",
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test("Should edit an existing expense", () => {
    const description = "NEW GUM";
    const id = expenses[0].id;
    const action = {
        type: "EDIT_EXPENSE",
        id,
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(description);
});

test("Should not edit expense as expense not found", () => {
    const description = "NEW GUM";
    const id = "NOT_EXISTING";
    const action = {
        type: "EDIT_EXPENSE",
        id,
        updates: {
            description
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("Should set expenses", () => {
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});
