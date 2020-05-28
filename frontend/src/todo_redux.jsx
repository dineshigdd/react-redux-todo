import React from 'react';
import ReactDOM from 'react-dom';
import  configureStore  from './store/store';
// import { receiveTodos , receiveTodo } from './actions/todo_actions'
import Root  from './components/root';

// We will use this to parse the user's session token
import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/session_api_util';

import { logout } from './actions/session_actions';



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

document.addEventListener('DOMContentLoaded', () => {
    let store;

     // If a returning user has a session token stored in localStorage
    if( localStorage.jwtToken){

// Set the token as a common header for all axios requests
        setAuthToken( localStorage.jwtToken );

  // Set the token as a common header for all axios requests
        const decodedUser = jwt_decode( localStorage.jwtToken );

        const preloadedState = { session: { isAuthenticated : true, user : decodedUser} }

        const store = configureStore(preloadedState);

        const curentTime = Date.now()/1000;

        if( decodedUser.exp < curentTime ) {
             // Logout the user and redirect to the login page
             store.dispatch( logout());
             window.location.href = '/login'
        }
    }else {
            // If this is a first time user, start with an empty store
            store = configureStore({});
    }

    // Render our root component and pass in the store as a prop
    ReactDOM.render(<Root store={store} />,document.getElementById('root') );
});

//This was the code before I added the backend part
/*document.addEventListener("DOMContentLoaded",()=>{ 
      
    const preloadedState = localStorage.state ? 
        JSON.parse(localStorage.state) : {};        
    const store = configureStore(preloadedState);

    ReactDOM.render(<Root store={store} />,document.getElementById('root') );
    
});*/



