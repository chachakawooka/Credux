import { actions } from '../actions/Core'

const initialState = {
  extension: false
}

const coreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREDUX_EXTENSION':
      return {
        extension: action.extension
      }
    default:
      return state
  }
}

export default coreReducer