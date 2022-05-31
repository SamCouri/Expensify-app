import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import {AddExpensePage} from "../../components/AddExpensePage";
import toJson from 'enzyme-to-json';  

let addExpense, history, wrapper;
beforeEach(() => {
    addExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);  
});

test('should render AddExpensePage correctly', ()=> {
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('should handle onSubmit', ()=> {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
