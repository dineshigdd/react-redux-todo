import React from 'react'
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component{
     

    render(){
        const { todos , receiveTodo } = this.props;
        const todoItems = todos.map( todo => (<div className='container todo-list-items'>
            <TodoListItem 
                key = { todo.id }
                todo= { todo}                
                receiveTodo = { receiveTodo }    />
                </div>
            ))

          
        return(
            <div>               
                <TodoForm  receiveTodo = { receiveTodo }  />
                {  todoItems }
            </div>
        );
    };
}


export default TodoList;
// export default ()=><h3>Todo List goes here</h3>;
//  const initialState = {
    //   1: {
    //     id: 1,
    //     title: "wash car",
    //     body: "with soap",
    //     done: false
    //   },
    //   2: {
    //     id: 2,
    //     title: "wash dog",
    //     body: "with shampoo",
    //     done: true
    //   }
    // };