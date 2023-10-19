// Import the action type constants from the 'bankActions' file.
import { DEPOSIT, WITHDRAW, ADD_INTEREST, APPLY_CHARGES } from '../actions/bankActions';

// Define the initial state of the bank application, starting with a balance of 1000.
const initialState = {
  balance: 1000
};

// Define the 'bankReducer' that updates the state based on the dispatched action.
export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    // When the DEPOSIT action is dispatched, increase the balance by the provided amount (action.payload).
    case DEPOSIT:
      return { balance: state.balance + action.payload };

    // When the WITHDRAW action is dispatched, decrease the balance by the provided amount (action.payload).
    case WITHDRAW:
      return { balance: state.balance - action.payload };

    // When the ADD_INTEREST action is dispatched, increase the balance by 5% of the current balance.
    case ADD_INTEREST:
      return { balance: state.balance + (state.balance * 0.05) };

    // When the APPLY_CHARGES action is dispatched, decrease the balance by 15% of the current balance.
    case APPLY_CHARGES:
      return { balance: state.balance - (state.balance * 0.15) };

    // If none of the above actions match, return the current state without making changes.
    default:
      return state;
  }
};
