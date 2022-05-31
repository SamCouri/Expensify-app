import filtersReducer from '../../reducers/filters';
import moment from 'moment';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('should set up default filter values', ()=> {
const state = filtersReducer(undefined, {type: '@@INIT'});
expect (state).toEqual(filtersReducerDefaultState);
});

//Sort by amount
test('should sort by amount', ()=> {
    const results = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
    expect(results.sortBy).toEqual('amount');
    });

//Sort by date
test('should sort by date', ()=> {
    const currentState ={
        text:'',
        sortBy:'amount', 
        startDate: undefined,
        endDate: undefined
    };
    const action= {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toEqual('date');
    });

//set text
const actionSetText = {
    type: 'SET_TEXT_FILTER',
    text: 'bill'
}

test('should set text filters', ()=> {
const state = filtersReducer(undefined, actionSetText);
expect(state.text).toEqual(actionSetText.text);
});

//Set start date
const actionSetStartDate = {
    type: 'SET_START_DATE',
    startDate: moment(0).add(5, 'days')
}

test('should set start date filter', ()=> {
    const state = filtersReducer(undefined, actionSetStartDate);
     expect(state.startDate).toEqual(actionSetStartDate.startDate);
    });

//Set end date
const actionSetEndDate = {
    type: 'SET_END_DATE',
    endDate: moment(0).add(8, 'days')
}

test('should set end date filter', ()=> {
    const results = filtersReducer(undefined, actionSetEndDate);
     expect(results.endDate).toEqual(actionSetEndDate.endDate);
    });




