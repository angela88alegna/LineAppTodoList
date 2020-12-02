import React, { Component, useState } from 'react';
import Form from './components/Form';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TodoList from './components/TodoList';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/ui/Theme'


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);


  return (
    <ThemeProvider theme={theme}>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >

        <Grid item xs={12}>
          <h1 style={{letterSpacing: "2px"}}>My Todo List</h1>
        </Grid>


        <Grid item xs={12}>
          <Form inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos} />
        </Grid>


        <Grid item xs={12}>


        </Grid>



      </Grid>
    </ThemeProvider>
  );
}

export default App;
