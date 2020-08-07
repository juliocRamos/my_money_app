import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

// import Dashboard_no_redux from '../dashboard_no_redux/dashboard_no_redux'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default (props) => {
    return (
        // <Route path='/' component={Dashboard_no_redux} />
        <Router history={hashHistory}>
            <Route path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Router>
    )
}