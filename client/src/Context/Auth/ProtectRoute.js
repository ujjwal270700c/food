import React, { useContext } from 'react'
import {Redirect,Route} from 'react-router-dom'
import AuthContext from './AuthContext'
const ProtectRoute = ({component: Component, ...rest}) => {
    const authContext=useContext(AuthContext)
    const {isAuthenticated, loading}=authContext
    console.log(loading);
    return (
        <Route
            {...rest}
             render={props=>{
                 if(localStorage.token== undefined ){
                   return <Redirect to={{pathname:'/auth'}} />
                 }else{
                   return <Component {...props} />
                 }
             }} />
    )
}

export default ProtectRoute