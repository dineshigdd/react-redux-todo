import { uniqueId } from '../../util/id_generator'
import React from 'react';
import '../../css/styles.css';


class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:'',
            body:'',
            done:false
        };

        this.createTodo = this.createTodo.bind(this);  
        this.getInput = this.getInput.bind(this);
      
    }

    /*https://www.w3schools.com/react/react_forms.asp 
    1.) To access the fields in the event handler use the event.target.
        name and event.target.value syntax.
    2.) To update the state in the this.setState method, 
        use square brackets [bracket notation] around the property name.*/


    getInput(event){
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});        
    }  

      
    
    createTodo(event){ //creating a todo
      event.preventDefault();     
      const id =  uniqueId();;   
      //this is the passed action creator from todo_list
      
      this.props.receiveTodo({ 
              id: id,
              title: this.state.title, 
              body: this.state.body,
              done:this.state.done
              }
      );
    
          this.setState({
            title: "",
            body: "",
            done:false
          }); // reset form
    }

    render(){
            return(
                <div className="main">
                    <h1>Todo List</h1>
                    <form className="todo-form" onSubmit={ this.createTodo }>
                        <div className="form-group">
                        <label>Title</label>
                            <input 
                                className="form-control"
                                onChange= { this.getInput }                             
                                name="title" 
                                type="text"
                                value={ this.state.title}
                                required
                            />                         
                         </div>

                         <div className="form-group">
                            <label>Body</label>
                                <textarea onChange= { this.getInput } 
                                className="form-control"                              
                                rows="3"
                                name="body" 
                                value={ this.state.body}
                                required>                        
                                </textarea>                         
                        </div>
                          <button className ="btn btn-primary btn-create-todo">Create a todo</button>                        
                    </form>
                </div>
            );
    }
}

export default TodoForm;
/*
 <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="buy milk"
            onChange={this.update('title')}
            required/>
        </label>
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="2% or whatever is on sale!"
            onChange={this.update('body')}
            required></textarea>
        </label>
        <button className="create-button">Create Todo!</button>
      </form> */