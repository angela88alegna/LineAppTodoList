import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Todo from './Todo'

const TodoItem = ({ todos, text, todo, setTodos }) => {

    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center" >

            <Grid>

                <ul style={{listStyle:"none", padding:"0", margin:"10px"}}>
                    {todos.map(elem => (
                        <Todo
                            todos={todos}
                            setTodos={setTodos}
                            key={elem.id}
                            text={elem.text}
                            elem={elem}

                        />
                    ))}

                </ul>
            </Grid>
            <Grid>
                
            </Grid>

        </Grid>
    )
}
export default TodoItem

