// Import the 'createStore' function from 'redux', which allows for the creation of a Redux store.
import { createStore } from 'redux';

// Import the 'bankReducer' which specifies how the state of the application changes in response to actions.
import { bankReducer } from '../reducers/bankReducer';

// Create the Redux store using the 'bankReducer' to manage and update the state.
const store = createStore(bankReducer);

// Export the created store so it can be used by the rest of the application.
export default store;
