import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates'; 
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import {render} from 'enzyme'; 
//import 'react-dates/lib/css/_datepicker.css';


export class ExpenseListFilters extends React.Component {
    state= {
    calendarFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    };

    onTextChange = (e)=> {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e)=> {
    if(e.target.value==="date"){
        this.props.sortByDate();
    } else if(e.target.value==="amount"){
        this.props.sortByAmount();
    }};

    render() {
        return (
            <div>
                <input 
                type="text"
                value={this.props.filters.text}
                onChange={this.onTextChange}
                />
            
                <select
                value={this.props.filters.sortBy} 
                onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount"> Amount</option>
                </select>

            <DateRangePicker 
            startDateId={"dwjkhqkehwqjkeq"}
            endDateId={"cxzvcxbzbczxbz"}
            startDate = {this.props.filters.startDate}
            endDate = {this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={()=> false}
            />
            </div>
            );
        }
    };

const mapStateToProps = (state) => {
    return {
        filters : state.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);
