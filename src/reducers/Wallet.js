import { actions } from '../actions/Wallet'

const initialState = {
  balances: []
}

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WALLET_BALANCE':

          if (state.balances.find((wallet) => wallet.key === action.key)) {
            state.balances = state.balances.map((wallet) => {
              if (wallet.key === action.key) {
                return {key: action.key, balance: action.balance};
              }
              return wallet;
            });
          } else {
            state.balances = state.balances.concat({key: action.key, balance: action.balance});
          }
      return {
        ...state
      }
    default:
      return state
  }
}

export default walletReducer