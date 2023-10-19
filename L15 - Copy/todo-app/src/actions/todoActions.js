// Define action types
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

// Action to add a new to-do
export const addTodo = content => ({
  type: ADD_TODO,
  payload: content
});

// Action to delete a to-do
export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: id
  });
  

// Action to edit a to-do's content
export const editTodo = (id, content) => ({
    type: EDIT_TODO,
    payload: { id, content }
  });

// Action to toggle the completion status of a to-do
export const toggleComplete = id => ({
  type: TOGGLE_COMPLETE,
  payload: id
});
