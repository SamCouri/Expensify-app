import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import moment from 'moment';


const store = configureStore();

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading ... </p>, document.getElementById('app')); 

store.dispatch(startSetExpenses()).then( ()=> {
    //console.log('this is before render ReactDom');
    ReactDOM.render(jsx, document.getElementById('app')); 
    //console.log('this is after render ReactDom');
});




//addExpense -> Water bill
// store.dispatch(addExpense({description: 'Water bill', amount: 450}));
//store.dispatch(addExpense({description: 'Gaz bill'}));
//store.dispatch(addExpense({description: 'Rent bill', amount: 109500}));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
