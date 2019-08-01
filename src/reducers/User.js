import { actions } from '../actions/User'

const initialState = {
  key: false,
  balance: 0.00
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_KEY':
      return {
        ...state,
        key: action.key
      }
    case 'USER_BALANCE':
      return {
        ...state,
        balance: action.balance
      }
    default:
      return state
  }
}

export default userReducer