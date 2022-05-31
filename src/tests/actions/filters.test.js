import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate } from '../../actions/filters';
import moment from 'moment';

test('should set up set text filter action object WITH text input', ()=> {
const text ='this is the text filter';
const action = setTextFilter(text);

expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text
});
});


test('should set up set text filter action object WITHOUT text input', ()=> {
    const action = setTextFilter();
    
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
    });


test('should set up sort by date action object', ()=> {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
    });

test('should set up sort by date amount object', ()=> {       
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
    });

test('should generate set start date object', ()=> {
    const action = setStartDate(moment(0));
            
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0),
    });
});

test('should generate set start date object', ()=> {
    const action = setEndDate(moment(0));
                
    expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
    });
});

