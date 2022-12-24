import React from "react";
import { shallow } from "enzyme";
import LoadingPage  from "../../components/LoadingPage";
import toJson from 'enzyme-to-json'; 

test('should render Loading Page correctly', ()=> {
    const wrapper = shallow(<LoadingPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
});