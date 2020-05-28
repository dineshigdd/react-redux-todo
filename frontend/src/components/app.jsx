import React from 'react';
import { AuthRoute , ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import TodoListContainer  from './todos/todo_list_container'

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = ()=>(  
    <div>
        <TodoListContainer />      
    <Switch>    
        <AuthRoute exact path="/" component={ MainPage}/>      
    </Switch>
    </div>
);
   


// const App = ()=>{    
//     return(   
//         <div>
//            <TodoListContainer />      
//         </div>
//     );
// }   
     
export default App;