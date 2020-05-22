import React from 'react';
import { uniqueId } from '../../util/id_generator'

class StepForm extends React.Component{
    constructor(props){
        super(props)

        this.state = { 
            id:'',
            title:'',
            done:false,
            todo_id:this.props.todoID
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getInput = this.getInput.bind(this);        
    }
    
    
    handleSubmit(event){
        event.preventDefault();  
          
        let step = { 
            id:uniqueId(), 
            title : this.state.title,   
            done:this.state.done,          
            todo_id:this.state.todo_id
        }
        this.props.receiveStep(step);  
        this.setState( { 
            id:"", 
            title : "",   
            done:this.state.done,          
            todo_id:this.state.todo_id
           
        }); 
    }   

    getInput(event){       
        this.setState({title:event.target.value});        
    }  

    render(){
        return( 
                <div className="step-form-container">     
                    <form className="form-group" onSubmit={ this.handleSubmit }>
                        <div>
                            <b>step:</b><input className="form-control" 
                                                value={this.state.title } 
                                                onChange={ this.getInput } 
                                                name='title' type="text"
                                                required/>                           
                            </div>
                            <button className="btn btn-secondary btn-step-submit">submit</button>
                    </form>            
                </div>
                );
    }
}

export default StepForm;