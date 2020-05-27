

export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);

//  export const allTodos = ({todos}) =>  Object.keys({todos});
        
/*Add another selector to your reducers/selectors.js file that will allow components to get the steps as an array.
Write a function stepsByTodoId(state, todoId)
You will need to loop through all the steps searching for the ones with the correct todoId.*/


    
export const stepsByTodoId = ({ steps }, todoId) => {
    var filteredSteps = [];        
    
    Object.keys(steps).map(id =>  {       
        
    if( steps[id].todo_id === todoId ) {            
            filteredSteps.push(steps[id]);
        } 
    })
  
    return filteredSteps;
}

    /*export const stepsByTodoId = ({ steps }, todoId) => Object.keys(steps).map(
        id =>  ( steps[id].todo_id === todoId ) ? steps[id]:undefined);*/