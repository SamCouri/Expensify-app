import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary }  from "../../components/ExpensesSummary";
import toJson from 'enzyme-to-json'; 

test('should correctly render expenses summary with one expense' , () => {
const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal= {235}/>);
expect(toJson(wrapper)).toMatchSnapshot();
});


test('should correctly render expenses summary with multiple expenses' , () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal= {2351236666}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});