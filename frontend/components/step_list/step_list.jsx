import StepListItemContainers from './step_list_item_container';
import React from 'react';
import StepForm from './step_form';



class StepList extends React.Component{
 
    render(){
        const { steps , receiveStep , todoID } = this.props;
        
        const StepListItem = steps.map( step => ( <li  key = { step.id } >           
             <StepListItemContainers  step={ step } />
             </li>
        ));
        return(
            
            <div>
                <StepForm todoID= { todoID } receiveStep = {receiveStep}/>
                <ul>
                    { StepListItem }
                </ul>
            </div>
        );
    }
}

export default StepList;