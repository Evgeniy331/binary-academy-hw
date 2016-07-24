import "babel-polyfill"
import React from "react"
import { render } from "react-dom"
import App from "./containers/app"
import UsersListApp from "./components/users-list-app.js"
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
	         <IndexRoute component={UsersListApp} />
        </Route>
    </Router>)
    , document.getElementById('root')
)
