import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';
import { render } from 'enzyme';


export class EditExpensePage extends React.Component {
onSubmit = (expense)=> {
    //this.props.editExpense(this.props.expense.id, expense);
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');    
    };

onRemove = () => {
    //this.props.removeExpense({id: this.props.expense.id});
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/');
};

render() {
    return (
        <div>
        <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove </button> 
        </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    return {
            expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
            })
        };
    };

const mapDispatchToProps = (dispatch, props) => {
    return {
        //editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        //removeExpense: (data) => dispatch(removeExpense(data)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data)) 
    };
};
    
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);


