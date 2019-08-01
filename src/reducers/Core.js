import { actions } from '../actions/Core'

const initialState = {
  extension: false,
  authorised: false
}

const coreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREDUX_EXTENSION':
      return {
        ...state,
        extension: action.extension
      }
    case 'CREDUX_AUTHORISED':
      return {
        ...state,
        authorised: action.authorised
      }
    default:
      return state
  }
}

export default coreReducer