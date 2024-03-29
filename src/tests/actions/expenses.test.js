import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, startRemoveExpense, removeExpense, startEditExpense, editExpense, setExpenses, startSetExpenses} from '../../actions/expenses';
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase"

const uid = 'thisismytestuid';
const createMockStore = configureMockStore([thunk]);
const defaultAuthState = {auth:{uid}};

beforeEach((done)=> {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt})=> {
        expensesData[id] = {description, note, amount, createdAt};
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=> done())
});


test('should set up remove expense action object', ()=> {
    const action = removeExpense({id: '123abc'});
    expect(action, 'REMOVE_EXPENSE').toEqual({
        id: '123abc',
        type: 'REMOVE_EXPENSE'
    })
});


test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({id})).then(()=> {
    const actions=store.getActions();
    expect(actions[0]).toEqual({
    type : "REMOVE_EXPENSE",
    id
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then( (snapshot)=> {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
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
  
test('should set up add expense action object WITH provided values', ()=> {
const action=addExpense(expenses[2]);
expect(action).toEqual({
                    type: 'ADD_EXPENSE',
                    expense: expenses[2]
                });
});

test('should edit expense in firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = { amount: 21045};

   store.dispatch(startEditExpense(id, updates)).then(()=> {
   const actions=store.getActions();
    expect(actions[0]).toEqual({
    id,
    type : "EDIT_EXPENSE",
    updates
    });
   return database.ref(`users/${uid}/expenses/${id}`).once('value');
   }).then((snapshot)=> {
       expect(snapshot.val().amount).toEqual(updates.amount);
       done();
       });
   });


test('should add expense to database and store', (done)=> {
const store = createMockStore(defaultAuthState);
const expenseData = {
description: "mouse",
amount: 3000,
note: 'this one is better',
createdAt: 1000
};

store.dispatch(startAddExpense(expenseData)).then(()=> {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            id: expect.any(String),
            ...expenseData
        }
    });
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then( (snapshot)=> {
    expect(snapshot.val()).toEqual(expenseData);
    done();
    });
});

test('should add expense with defaults to database and store', (done)=> {
    const store = createMockStore(defaultAuthState);
    const expenseDefault = {
    description:'',
    note:'',
    amount: 0,
    createdAt: 0
    };
    
    store.dispatch(startAddExpense({})).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense : {
                id: expect.any(String),
                ...expenseDefault
                //actions[0].expense.id
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        }).then( (snapshot)=> {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
        });

});

test('should set up set expense action with date', ()=> {
    const action= setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});


test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
        
    store.dispatch(startSetExpenses()).then(()=> {
    const actions=store.getActions();
    expect(actions[0]).toEqual({
    type : "SET_EXPENSES",
    expenses
    });
    done();
    });
});



