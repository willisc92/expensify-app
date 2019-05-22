import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("Should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseForm with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test("Should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    }); // See Enzyme simulate docs.
    expect(wrapper.state("error").length).toBeGreaterThan(0); // See Enzyme state docs.
    expect(wrapper).toMatchSnapshot();
});

test("Should set description on input change", () => {
    const value = "New description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find("input")
        .at(0)
        .simulate("change", {
            target: { value }
        });
    expect(wrapper.state("description")).toBe(value);
});

test("Should set note on textarea change", () => {
    const value = "New note";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").simulate("change", {
        target: { value }
    });
    expect(wrapper.state("note")).toBe(value);
});

test("Should set a valid amount on change", () => {
    const value = "23.50";
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find("input")
        .at(1)
        .simulate("change", {
            target: { value }
        });
    expect(wrapper.state("amount")).toBe(value);
});

test("Should set an invalid amount on change", () => {
    const value = "12.122";
    const wrapper = shallow(<ExpenseForm />);
    wrapper
        .find("input")
        .at(1)
        .simulate("change", {
            target: { value }
        });
    expect(wrapper.state("amount")).toBe("");
});

test("should call onSubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn(); // Allow to mock events like form submissions.
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test("Should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onDateChange")(now); // Use prop() returns change handler - call with the expected property.
    expect(wrapper.state("createdAt")).toEqual(now);
});

test("Should set calender focus on change", () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
    expect(wrapper.state("calenderFocused")).toBe(focused);
});
