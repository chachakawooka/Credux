import { combineReducers } from 'redux'
import Core from './Core'
import User from './User'

const reducers = combineReducers({
    Core,
    User
})

export default reducers