import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


const Todo = ({ text, setTodos, todos, elem }) => {

const deleteTodo= ()=>{
    setTodos(todos.filter((el)=>el.id !== elem.id));
}

    return (
        <div>
            <Grid container
            direction="row"
            justify="space-between"
          
            >
            <Grid>


                <li style={{fontSize:"1.2rem", letterSpacing:"2px", marginRight:"5rem", fontWeight:"400", textTransform:"capitalize"}}>
                    {text}
                </li>
                </Grid>
                <Grid>
                <DeleteIcon onClick={deleteTodo} style={{cursor: "pointer"}}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Todo
