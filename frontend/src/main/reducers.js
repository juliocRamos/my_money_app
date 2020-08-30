import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

import TabReducer from '../common/tab/tabReducer'
import DashboardReducer from '../dashboard/dashboardReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer