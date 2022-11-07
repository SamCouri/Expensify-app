import authReducer from '../../reducers/auth';

//Login
test('should set uid for login', ()=> {
    const actionLogin = {
        type: 'LOGIN',
        uid: 'abc123'
    };
    const state = authReducer({}, actionLogin);
    expect(state.uid).toEqual(actionLogin.uid);
})


//Logout
test('should clear uid for logout', ()=> {
    const actionLogout = {
        type: 'LOGOUT',
    };
    const state = authReducer({uid:'anything'}, actionLogout);
    expect(state).toEqual({});
})