import React from 'react';

class stepListItem extends React.Component{
    constructor(props){
        super(props)         
        this.updateTodo = this.updateTodo.bind(this);
    }
   

    updateTodo(e){
        e.preventDefault(); 
        const status = 
         Object.assign({},this.props.step,{done:!this.props.step.done})         
         this.props.receiveStep(status);
    }

    render(){
      
        const { step, removeStep} = this.props;
       
        return(  
            <div>
                <div className="container step-item-container">
                    <div className="row">
                        <div className="col">
                            <span>{ step.title }</span> </div>          
                        <div className="col">
                            <button className="btn btn-danger" onClick={ removeStep }>delete</button>
                        {/* </div>
                        <div className="col-sm"> */}
                            <button className="btn btn-success" onClick={ this.updateTodo }>
                               { step.done ? "undone": "done" }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
     );
    }
}



export default stepListItem;