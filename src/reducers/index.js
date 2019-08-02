import { combineReducers } from 'redux'
import Core from './Core'
import User from './User'
import Wallet from './Wallet'
import Transactions from './Transactions'

const reducers = combineReducers({
    Core,
    User,
    Wallet,
    Transactions
})

export default reducers