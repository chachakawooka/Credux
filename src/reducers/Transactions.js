import { actions } from '../actions/Transactions'

const initialState = {
  results: [],
  lastResult: null
}

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSACTION_RESULTS':
      return {
        ...state,
        results: state.results.concat({id: action.id, result:action.result}),
        lastResult: {id: action.id, result:action.result}
      }
    default:
      return state
  }
}

export default transactionReducer