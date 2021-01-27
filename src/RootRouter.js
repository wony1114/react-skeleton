import React from 'react'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import {Provider} from'react-redux'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import { rootReducer } from './root.reducer'
import { Main } from './Main'
import { UserLogin } from './user/index'
import { UserJoin } from './user/index'
import { UserDetail } from './user/index'
import { UserUpdate } from './user/index'
import { UserList } from './user/index'



export const RootRouter = () => {
    return (<>
    <Provider store={createStore(rootReducer)}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/user-login' component={UserLogin}/>
                <Route path='/user-join' component={UserJoin}/>
                <Route path='/user-detail' component={UserDetail}/>
                <Route path='/user-list' component={UserList}/>
                <Route path='/user-update' component={UserUpdate}/>
                <Route component={Error}/> 
            </Switch>
        </BrowserRouter>
    </Provider>
    </>)
}