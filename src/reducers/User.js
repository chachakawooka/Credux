import { actions } from '../actions/User'

const initialState = {
  key: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_KEY':
      return {
        key: action.key
      }
    default:
      return state
  }
}

export default userReducer