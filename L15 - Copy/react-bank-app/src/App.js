// Import necessary dependencies
import React from 'react';
// 'useSelector' allows you to extract data from the Redux store state.
// 'useDispatch' returns a reference to the dispatch function from the Redux store.
import { useSelector, useDispatch } from 'react-redux';
// Import action creators for depositing, withdrawing, adding interest, and applying charges.
import { deposit, withdraw, addInterest, applyCharges } from './actions/bankActions';

function App() {
  // Extract the 'balance' value from the Redux store's state.
  const balance = useSelector(state => state.balance);
  // Get the 'dispatch' method for dispatching actions to the store.
  const dispatch = useDispatch();

  // Create a reference to the input element for the amount.
  let amountInput = React.createRef();

  return (
    <div>
      {/* Display the current balance */}
      <h2>Balance: £{balance}</h2>
      {/* Input to enter the desired amount for deposit or withdrawal */}
      <input type="number" ref={amountInput} placeholder="Enter amount" />
      {/* Button to dispatch a deposit action with the entered amount */}
      <button onClick={() => dispatch(deposit(parseFloat(amountInput.current.value)))}>Deposit</button>
      {/* Button to dispatch a withdraw action with the entered amount */}
      <button onClick={() => dispatch(withdraw(parseFloat(amountInput.current.value)))}>Withdraw</button>
      {/* Button to dispatch an action to add interest to the current balance */}
      <button onClick={() => dispatch(addInterest())}>Add Interest</button>
      {/* Button to dispatch an action to apply charges to the current balance */}
      <button onClick={() => dispatch(applyCharges())}>Charge Fees</button>
    </div>
  );
}

// Export the 'App' component to be used in other parts of the application.
export default App;
