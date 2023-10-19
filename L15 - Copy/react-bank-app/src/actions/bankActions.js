// Represents the action type for depositing an amount into the account.
export const DEPOSIT = "DEPOSIT";

// Represents the action type for withdrawing an amount from the account.
export const WITHDRAW = "WITHDRAW";

// Represents the action type for adding interest to the current balance.
export const ADD_INTEREST = "ADD_INTEREST";

// Represents the action type for applying charges to the current balance.
export const APPLY_CHARGES = "APPLY_CHARGES";

// Action Creators
// These functions create and return action objects for the above-defined action types.

// Creates and returns a deposit action with the specified amount.
export const deposit = amount => ({ type: DEPOSIT, payload: amount });

// Creates and returns a withdraw action with the specified amount.
export const withdraw = amount => ({ type: WITHDRAW, payload: amount });

// Creates and returns an action to add interest to the current balance.
export const addInterest = () => ({ type: ADD_INTEREST });

// Creates and returns an action to apply charges to the current balance.
export const applyCharges = () => ({ type: APPLY_CHARGES });
