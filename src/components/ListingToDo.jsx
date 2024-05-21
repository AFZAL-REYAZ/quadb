// src/components/TodoList.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo } from "../store/TodoSlice";
import InputToDo from "./InputToDo";
import { TextField, Button, List, Typography, Card } from "@mui/material";

const ListingToDo = () => {
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddOrEditTodo = () => {
    if (text.trim()) {
      if (isEditing) {
        dispatch(editTodo({ id: editId, text }));
        setIsEditing(false);
        setEditId(null);
      } else {
        dispatch(addTodo(text));
      }
      setText("");
    }
  };

  const handleEditClick = (todo) => {
    setText(todo.text);
    setIsEditing(true);
    setEditId(todo.id);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>
      <TextField
        label="Todo"
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddOrEditTodo}
        style={{ marginTop: "10px" }}
      >
        {isEditing ? "Save" : "Add Todo"}
      </Button>
      <List>
        {todos.map((todo) => (
          <Card
            style={{
              maxWidth: 400,
              margin: "20px auto",
              padding: 20,
              backgroundColor: "#f5f5f5",
              borderRadius: 10,
            }}
          >
            <InputToDo
              key={todo.id}
              todo={todo}
              onEditClick={handleEditClick}
            />
          </Card>
        ))}
      </List>
    </div>
  );
};

export default ListingToDo;
