
import { RECEIVE_TODOS, RECEIVE_TODO , REMOVE_TODO } from '../actions/todo_actions'

const todosReducer = ( state = {}, action )=> {
  Object.freeze(state);  
  let nextState = {};
  switch( action.type){
        case RECEIVE_TODOS:          
          Object.keys(action.todos).forEach( todo =>{
            nextState[todo.id] = todo;
          })
          return nextState;

        case RECEIVE_TODO: 
           nextState = Object.assign({},state);        
           const newTodo = {[action.todo.id]: action.todo};          
           nextState =  Object.assign({}, state, newTodo);         
           return nextState;

        case REMOVE_TODO:          
          nextState = Object.assign({}, state);
          delete nextState[action.todo.id];
          return nextState;
         default:
          return state;
    }
};

export default todosReducer;