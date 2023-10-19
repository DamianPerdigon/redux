import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

function AddTodo() {
  const [inputValue, setInputValue] = useState(''); // State to hold the input value
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) { // Check if the input value is not empty or whitespace
      dispatch(addTodo(inputValue)); // Dispatch the addTodo action to add a new task
      setInputValue(''); // Clear the input field after adding a task
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update inputValue with the input field value
        placeholder="Add a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
