import store from './store';
import {bugAdded, bugRemoved} from './actions'

store.dispatch(bugAdded('bug1'))

store.dispatch(bugRemoved('bug2'))
console.log("store changed", store.getState())