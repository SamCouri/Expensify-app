import React from "react";
import {connect} from "react-redux";
import { Route, Redirect} from "react-router-dom";
import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
    })=> (
<Route {...rest} component= {(props)=> (
isAuthenticated ? (
    //console.log('Props inside PrivateRout', props),
    <div>
        <Header/>
        <Component {...props}/>
    </div>
    ) : (
    <Redirect to="/"/>
)
)}/>
);

const mapStateToProps = (state) => ({
isAuthenticated: !!state.auth.uid
//we will get boolean TRUE if we are authenticated, FALSE otherwise.
});

export default connect(mapStateToProps)(PrivateRoute);
