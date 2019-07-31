import { combineReducers } from 'redux'
import core from './Core'
import coreAgain from './Core'

const reducers = combineReducers({
    core,
    coreAgain
})

export default reducers