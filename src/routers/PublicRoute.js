import React from "react";
import {connect} from "react-redux";
import { Route, Redirect} from "react-router-dom";
import LoginPage from "../components/LoginPage";

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
    })=> (
<Route {...rest} component= {(props)=> (
isAuthenticated ? (
    <Redirect to="/dashboard"/>
    ) : (
    <div>
        <Component {...props}/>
    </div>
)
)}/>
);

const mapStateToProps = (state) => ({
isAuthenticated: !!state.auth.uid
//we will get boolean TRUE if we are authenticated, FALSE otherwise.
});

export default connect(mapStateToProps)(PublicRoute);