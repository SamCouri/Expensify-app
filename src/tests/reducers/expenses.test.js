import { ConcatenationScope } from 'webpack';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

const expensesReducerDefaultState = [];

test('should set default state', () => {
const state = expensesReducer(undefined, {type: "@@INIT"} );
expect(state).toEqual([]);
});

//Remove expenses
test('should remove expenses by id', ()=> {
    const actionRemove = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, actionRemove);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expenses if id not found', ()=> {
    const actionRemove = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };    
    const state = expensesReducer(expenses, actionRemove);
    expect(state).toEqual(expenses);
    })


//Add an expense
test('should add an expenses', () => {
const expense = { 
        id: '109', 
        description: 'laptop',
        note: '',
        amount: 29500,
        createdAt: 20000
    };
const actionAdd = {
    type: 'ADD_EXPENSE',
    expense 
    };

    const state = expensesReducer(expenses, actionAdd);
    expect(state).toEqual([...expenses, expense]);
});

//Edit expense
test('should edit an expenses', () => {
const amount = 122000;
const actionEdit = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount  
    }
};
const state = expensesReducer(expenses, actionEdit);
expect(state[1].amount).toEqual(amount);
});

//Should not Edit expense if id not found
test('should edit an expenses', () => {
    const amount = 122000;
    const actionEdit = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
          amount  
        }
    };
    const state = expensesReducer(expenses, actionEdit);
    expect(state).toEqual(expenses);
    });

    
test('should set expenses', ()=> {
const actionSet = {
    type: 'SET_EXPENSES',
    expenses: [expenses[0]]
    };
    const state = expensesReducer(expenses, actionSet);
    expect(state).toEqual(actionSet.expenses);
});

