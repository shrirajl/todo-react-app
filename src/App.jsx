import { useState, useEffect } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { CheckboxList } from './CheckboxList';
import "./styles.css";

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  const [newTodo, setNewTodo] = useState("");
  function addTodo() {
    if(newTodo && newTodo.trim().length > 0) {
      setTodos(todos => {
        return [
          ...todos,
          { id: Date.now(), title: newTodo, completed: false },
        ]
      })
    }
    

  }

  function onCompletedToggle(id, completed) {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(todos => {
      return todos.filter(todo => todo.id !== id)
    })
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <div>
          <header className="header">
            <h1>Todos</h1>
          </header>
          <Stack>
            <TextField id="standard-basic" label="What needs to be done?" variant="standard"
              value={newTodo}
              onChange={e => setNewTodo(e.target.value)}
              autoFocus={true}
              type="text"
              id="item" />
            <Button variant="contained" className="topMargin" onClick={() => addTodo()}>Add</Button>
          </Stack>
          <CheckboxList todos={todos} onCompletedToggle={onCompletedToggle} deleteTodo={deleteTodo}></CheckboxList>
        </div>
      </Box>
    </Container>
  )
}