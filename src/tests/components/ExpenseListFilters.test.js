import React from 'react';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import { shallow } from 'enzyme';
import {filters, altFilters} from '../fixtures/filters';
import toJson from 'enzyme-to-json';
import moment, { now } from 'moment';

let sortByDate, sortByAmount, setStartDate, setEndDate, setTextFilter, wrapper; 
    
//onDatesChange;

beforeEach(() => {
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    //onDatesChange = jest.fn();
    wrapper = shallow(<ExpenseListFilters
                        filters = {filters}                
                        sortByDate={sortByDate} 
                        sortByAmount={sortByAmount}
                        setTextFilter={setTextFilter}
                        setStartDate = {setStartDate}
                        setEndDate = {setEndDate}
                        //onDatesChange = {onDatesChange}
                        />);
});

test('should render ExpenseListFilters correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
// setProps from enzyme    
    wrapper.setProps({
        filters : altFilters
    });
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should handle text change', ()=> {
    const value = 'rent';
    //const value1 = 'extra new text';
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    }); 
     expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort By Date on input change', ()=> {
    wrapper.setProps({
        filters : altFilters
    });
    const value = 'date';
    //const value1 = 'extra new text';
    wrapper.find('select').at(0).simulate('change', {target: {value}}); 
     expect(sortByDate).toHaveBeenCalled();
});

test('should sort By Amount on input change', ()=> {
    const value = 'amount';
    wrapper.find('select').at(0).simulate('change', {target: {value}}); 
     expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', ()=> {
    const startDate= moment(0).add(4, 'years');  
    const endDate = moment(0).add(8, 'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', ()=> {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
    });
