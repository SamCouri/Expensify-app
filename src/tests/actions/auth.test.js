import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import {login, logout} from '../../actions/auth';

test('should generate login action object', ()=> {
    const uid= "1234abc";
    const action = login(uid);
    expect(action).toEqual({
        uid,
        type: 'LOGIN'
    });
});


('should generate logout action object', ()=> {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});