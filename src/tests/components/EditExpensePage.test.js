import React from 'react';
import { shallow } from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import  expenses from "../fixtures/expenses";
import toJson from 'enzyme-to-json';
//import ExpenseForm from '../../components/ExpenseForm';

let editExpense, removeExpense, history, wrapper;
beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
                        editExpense={editExpense} 
                        removeExpense={removeExpense}
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
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle remove expense correctly', ()=> {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
});
