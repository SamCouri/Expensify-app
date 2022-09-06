import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem  from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

let total_expenses = 0 ;
export const ExpenseList = (props) => (
<div>
{
    props.expenses.length=== 0? (
        <p>No expenses</p>
    ) :  (
        props.expenses.map((expense) => {
            total_expenses = total_expenses + expense.amount;
            return <ExpenseListItem key={expense.id}{...expense}/>
        })
    )
}
<h2>Total expenses : total_expenses</h2>
</div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
        };
};

export default connect(mapStateToProps)(ExpenseList);
