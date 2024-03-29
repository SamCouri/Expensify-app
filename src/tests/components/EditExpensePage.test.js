import React from 'react';
import { shallow } from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import  expenses from "../fixtures/expenses";
import toJson from 'enzyme-to-json';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
                        startEditExpense={startEditExpense} 
                        startRemoveExpense={startRemoveExpense}
                        history={history}
                        expense={expenses[2]}  
                        />);
});

test('should render editExpensePage correctly', ()=> {
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should handle edit expense correctly', ()=> {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpense correctly', ()=> {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
});
