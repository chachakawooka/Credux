import { combineReducers } from 'redux'
import Core from './Core'
import User from './User'
import Wallet from './Wallet'

const reducers = combineReducers({
    Core,
    User,
    Wallet
})

export default reducers