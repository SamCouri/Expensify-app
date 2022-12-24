import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
import getVisibleExpenses from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import moment from 'moment';
import LoadingPage from "./components/LoadingPage";

const store = configureStore();

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;

const renderApp = ()=> {
if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app')); 
    hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app')); 


firebase.auth().onAuthStateChanged((user) => {
if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then( ()=> {
        renderApp(); 
        //redirect only if the user is on the login page
        if(history.location.pathname ==='/') {
            history.push('/dashboard');
        };
    
    });
} else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
    //console.log("user is after history / ");
    }
});




//addExpense -> Water bill
// store.dispatch(addExpense({description: 'Water bill', amount: 450}));
//store.dispatch(addExpense({description: 'Gaz bill'}));
//store.dispatch(addExpense({description: 'Rent bill', amount: 109500}));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
