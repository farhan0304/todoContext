import React,{createContext, useContext} from 'react'

const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "todo msg",
            complete: false
        }
    ],
    addTodo: (todo) =>{},
    updateTodo: (id,todo) =>{},
    deleteTodo: (id) =>{},
    togleComplete: (id) =>{}
});

export default TodoContext

export const useTodo = () => useContext(TodoContext);

export const TodoContextProvider = TodoContext.Provider;
