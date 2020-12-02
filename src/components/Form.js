import React, { Component } from 'react';
import TodoList from './TodoList';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const Form=({setInputText, todos, setTodos, inputText}) => {

const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
};


const preventSubmit= (e)=>{
    e.preventDefault();
    setTodos([
        ...todos, {text: inputText, id: Math.random()*1000, completed:false}
    ]);
    setInputText("");
}

const clearAll=()=>{
    setTodos([])
}

        return (
            <div>
                <form>
                    <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <Grid>
                            <TextField style={{marginBottom:"30px"}} onChange={inputTextHandler} id="outlined-search" label="Digit a Todo" type="search" variant="outlined" value={inputText} />
                        </Grid>

                        <Grid>
                            <Button style={{padding:" 13px 25px", marginBottom:"30px", fontSize:"1rem", fontWeight:"bold", letterSpacing: "2px", color:"#fff"}} onClick={preventSubmit} variant="contained" color="secondary"  type="submit" >Add Todo</Button>
                        </Grid>
                        <Grid>
                            <h1 style={{letterSpacing: "2px"}}>Todos</h1>
                        </Grid>
                        <Grid>
                        
                            <TodoList  
                            setInputText={setInputText} 
                            todos={todos} 
                            setTodos={setTodos} 
                            

                             
                            />

                        </Grid>
                        <Grid>
                        <Button style={{padding:" 13px 25px", marginBottom:"50px", marginTop:"50px", fontSize:"1rem", fontWeight:"bold", letterSpacing: "2px", color:"#fff"}}  onClick={clearAll} variant="contained" color="primary" >Clear All Todos</Button>
                        </Grid>
                    </Grid>

                </form>
            </div>
        )
    }
export default Form
