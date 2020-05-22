import React from 'react';
import ReactDOM from 'react-dom';
import  configureStore  from './store/store';
// import { receiveTodos , receiveTodo } from './actions/todo_actions'
import Root  from './components/root';
// import { Provider } from 'react-redux';
// import { stepsByTodoId } from './reducers/selectors' ;
// import { receiveSteps , receiveStep , removeStep } from './actions/step_actions';
// import { receiveTodo, removeTodo } from './actions/todo_actions';
// import stepReducer from './reducers/steps_reducers';
// import StepList from './components/step_list/step_list'


// window.configureStore = configureStore;
// window.receiveTodo = receiveTodo;
// window.removeTodo = removeTodo;
// window.receiveSteps = receiveSteps;
// window.receiveStep = receiveStep;
// window.removeStep = removeStep;
// window.stepReducer = stepReducer;
// window.stepsByTodoId = stepsByTodoId;
// window.StepList = StepList;




document.addEventListener("DOMContentLoaded",()=>{   
    const preloadedState = localStorage.state ? 
        JSON.parse(localStorage.state) : {};        
    const store = configureStore(preloadedState);

    ReactDOM.render(<Root store={store} />,document.getElementById('root') );
    
});



