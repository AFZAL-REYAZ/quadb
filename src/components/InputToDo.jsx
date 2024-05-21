// src/components/InputToDo.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/TodoSlice';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const InputToDo = ({ todo, onEditClick }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" aria-label="edit" onClick={() => onEditClick(todo)}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteTodo(todo.id))}>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={todo.text}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => dispatch(toggleTodo(todo.id))}
      />
    </ListItem>
  );
};

export default InputToDo;
