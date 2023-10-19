import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_COMPLETE } from '../actions/todoActions';

const initialState = {
  nextId: 2, // Keeps track of the next available ID for new todos
  data: {
    1: {
      content: 'Content 1',
      completed: false
    }
  }
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // Adding a new todo with a unique ID and initial completion status
      return {
        ...state,
        nextId: state.nextId + 1,
        data: {
          ...state.data,
          [state.nextId]: {
            content: action.payload,
            completed: false
          }
        }
      };
    case DELETE_TODO:
      // Deleting a todo by its ID
      const newState = { ...state };
      delete newState.data[action.payload];
      return newState;
    case EDIT_TODO:
      // Editing the content of a todo by its ID
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            content: action.payload.content
          }
        }
      };
    case TOGGLE_COMPLETE:
      // Toggling the completion status of a todo by its ID
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: {
            ...state.data[action.payload],
            completed: !state.data[action.payload].completed
          }
        }
      };
    default:
      return state;
  }
};
