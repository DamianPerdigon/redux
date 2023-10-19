import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../actions/todoActions';

function TodoList() {
  const tasks = useSelector(state => state.data); // Get tasks from the global state
  const dispatch = useDispatch();

  // Add states for editing
  const [isEditing, setIsEditing] = useState(null); // Store the ID of the task being edited
  const [editedContent, setEditedContent] = useState(''); // Store the edited content

  const handleDelete = (id) => {
    dispatch(deleteTodo(id)); // Call the deleteTodo action to delete a task by its ID
  };

  const handleEdit = (id, content) => {
    setIsEditing(id); // Set the ID of the task being edited
    setEditedContent(content); // Set the current content of the task for editing
  };

  const handleSaveEdit = (id) => {
    if (editedContent.trim()) {
      dispatch(editTodo(id, editedContent)); // Call the editTodo action to edit the content of a task by its ID
      setIsEditing(null); // End the editing mode
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(null); // Cancel editing and return to view mode
  };

  return (
    <div>
      <h2>Tasks:</h2>
      <ul>
        {Object.keys(tasks).map(id => (
          <li key={id}>
            {isEditing === id ? (
              <>
                <input
                  type="text"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {tasks[id].content}
                <button onClick={() => handleEdit(id, tasks[id].content)}>Edit</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
