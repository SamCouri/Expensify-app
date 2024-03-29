import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json'; 
import {Header} from '../../components/Header';
import {startLogout} from "../../actions/auth";


test('should render header correctly', ()=> {
const wrapper = shallow(<Header startLogout={()=> {}}/>);
expect(toJSON(wrapper)).toMatchSnapshot();
});


//using SPIES
test('should call startLogout on button click', ()=> {
    const startLogoutSpy = jest.fn();
    const wrapper =shallow(<Header startLogout={startLogoutSpy}/>);
    wrapper.find('button').simulate('click');
    expect(startLogoutSpy).toHaveBeenCalled();
});

