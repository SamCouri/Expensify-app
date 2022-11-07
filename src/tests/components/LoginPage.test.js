import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";
import toJson from 'enzyme-to-json'; 

test('should render Login Page correctly', ()=> {
    const wrapper = shallow(<LoginPage/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

//Using Spies
test('should call startLogin on button click', ()=> {
    const startLoginSpy = jest.fn();
    const wrapper =shallow(<LoginPage startLogin={startLoginSpy}/>);
    wrapper.find('button').simulate('click');
    expect(startLoginSpy).toHaveBeenCalled();
});