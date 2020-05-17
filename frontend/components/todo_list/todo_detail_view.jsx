import React from 'React';
import StepListContainer from '../../components/step_list/step_list_container';


class TodoDetailView extends React.Component {
    
    render(){
         const {  removeTodo, todo } = this.props;       
        return(         
            <div>      
                <p className="todo-body">{ todo.body }</p>
                <StepListContainer todoID={ todo.id }/>
                <button className="btn btn-danger" onClick={ removeTodo }>delete</button>               
            </div>

        )
    }
}

export default TodoDetailView;