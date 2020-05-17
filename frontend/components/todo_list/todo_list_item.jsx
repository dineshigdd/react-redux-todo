import React from 'React';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
    constructor(props){
        super(props);
        
        this.handleDetail = this.handleDetail.bind(this);
        this.updateTodo = this.updateTodo.bind(this);  
        this.state = {             
            detail: false  }
        
    }        
   

    updateTodo(e){
        // this.setState(state => ({ done: !state.done } ));
        // this.props.todo.done = this.state.done;    
        e.preventDefault();
        const status = 
         Object.assign({},this.props.todo,{done:!this.props.todo.done})         
         this.props.receiveTodo(status);
    }



    
    handleDetail(){   
        this.setState(state => ({ detail: !state.detail } ));   
        // if( this.state.detail === false){
        //     this.setState({ detail:true})
        // }else{
        //     this.setState({ detail:false})
        // }
     }

    render(){
        const { todo } = this.props;
        
        const showDetailView = <TodoDetailViewContainer todo={todo}/>
                 
      
        return(
            //   <div className="container" tabIndex="0">     
                    <div className="row" tabIndex="0">
                        <div className="col">                                                 
                            <a onClick={ this.handleDetail }><b>{ todo.title }</b></a>                                          
                            { ( this.state.detail ) ?  showDetailView:'' }     
                        </div>         
                        <div  className="col">  
                            <button className="toggle-done-button btn btn-primary" onClick={ this.updateTodo }>
                            { todo.done ? "undone": "done" }
                            </button>                            
                        </div>
                    </div>
                // </div>       
            );
    }
};

export default TodoListItem;