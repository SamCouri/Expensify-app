import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';


test('should render expense form correctly', ()=> {
const wrapper = shallow(<ExpenseForm />);
expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render expense form  with expense data', ()=> {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render error for invalid form function', ()=> {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault : ()=> {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should set description on input change', ()=> {
    const value = 'new description';
    //const value1 = 'extra new description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    }); 
    expect(wrapper.state('description')).toBe(value);
});

test('should set valid amount on input change', ()=> {
    const value = '23.50';
    //const value1 = '22222';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    }); 
    expect(wrapper.state('amount')).toBe(value);
});

test('should NOT set an envalid amount on input change', ()=> {
    const value = '25.444';
    //const value1 = '22222';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    }); 
    expect(wrapper.state('amount')).toBe('');
});

test('should set note on input change', ()=> {
    const value = 'new note value';
    //const value1 = 'Brand vanlue';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

//using SPIES
test('should call onSubmit prop for valid form submission', ()=> {
    const onSubmitSpy = jest.fn();
    const wrapper =shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
    preventDefault : ()=> {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description : expenses[0].description,
    amount : expenses[0].amount,
    note: expenses[0].note,
    createdAt : expenses[0].createdAt
    });
});

test('should set new date on date change', ()=> {
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set new focus on focus change', ()=> {
const focused = true;
const wrapper = shallow(<ExpenseForm/>);
wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
expect(wrapper.state('calendarFocused')).toBe(focused);
});
