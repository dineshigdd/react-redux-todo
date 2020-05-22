import { connect } from 'react-redux';
import StepList from './step_list';
import { receiveStep } from '../../actions/step_actions'
import { stepsByTodoId } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) =>{  
    const todoId = ownProps.todoID;   
    return { steps : stepsByTodoId(state,todoId) }  
};

const mapDispatchToProps = dispatch => ({
    receiveStep : step => dispatch(receiveStep(step))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(StepList);

    

   