//import React from "react";
//import selectExpenses from "../selectors/expenses";

export default (expenses) => {
    return expenses.map((expense) => expense.amount).
        reduce((sum, value) => sum + value, 0);
};


/*
export const CalculateTotal = (props)=>(
<div>
    <br></br>
    Viewing {props.expenses.length} 
            {props.expenses.length <=1 ? " expense " : " expenses "}

    totalling {(numeral( props.expenses.
                    map((expense) => expense.amount).
                    reduce((sum, value) => sum + value, 0)/100)).
                    format('$0,0.00')
                }
    <br></br>
    <br></br>
</div>
)

const mapStateToProps = (state) => {
        return {
        expenses : selectExpenses(state.expenses, state.filters)
        };
};

export default connect(mapStateToProps)(CalculateTotal);

//export default connect(mapStateToProps, selectExpensesTotal)(CalculateTotal);
        /*
        export default(expenses) => {
        return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value)=> sum + value, 0);
        };
        */

    /*

export const CalculateTotal = (props)=>(
<div>
    Total expenses: {selectExpensesTotal(props)}
</div>
)
*/



