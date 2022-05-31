import {addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should set up remove expense action object', ()=> {
    const action = removeExpense({id: '123abc'});
    expect(action, 'REMOVE_EXPENSE').toEqual({
        id: '123abc',
        type: 'REMOVE_EXPENSE'
    })
});

test('should set up edit expense action object', ()=> {
    const action = editExpense(
        '123abc',    
        {description: 'new description',
        note: 'new note',
        amount: 11,
        createdAt: 10000}
    );
    
    expect(action).toEqual({
        id: '123abc',
        type: 'EDIT_EXPENSE', 
        updates: {
        description: 'new description',
        note: 'new note',
        amount: 11,
        createdAt: 10000}
        })
    });
  
test('should set up add expense action object WITH arguments', ()=> {
const expenseData = {
    description: 'Rent',
    note: 'Last month rent',
    amount: 444,
    createdAt: 3000
}
const action=addExpense(expenseData);
expect(action).toEqual({
                    type: 'ADD_EXPENSE',
                    expense: {
                        ...expenseData,
                        id:expect.any(String),
                    }
                });
});

test('should set up add expense action object WITHOUT arguments', ()=> {
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt:0 
}
const action = addExpense(expenseData);
expect(action).toEqual({
                    type: 'ADD_EXPENSE',
                    expense: {
                    id:expect.any(String),
                    ...expenseData
                    }
                 });
});
