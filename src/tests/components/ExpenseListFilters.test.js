import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters = {filters}
            setTextFilter = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />
    );
});

test('Should render expense list filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render expense list filters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
    const value = "New text";
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('Should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const value = "date";
    wrapper.find('select').simulate('change', {
        target: { value }
    });    
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
    const value = "amount";
    wrapper.find('select').simulate('change', {
        target: { value }
    });    
    expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle date change', () => {
    const startDate = moment(5);
    const endDate = moment(10);
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus change', () => {
    const calenderFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
});