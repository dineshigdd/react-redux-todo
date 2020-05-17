import { removeStep, receiveStep } from '../../actions/step_actions';
import { connect } from 'react-redux';
import stepListItem from './step_list_item';

const mapDispatchToProps = ( dispatch,{step} ) => ({
    removeStep: () => dispatch(removeStep(step)),
    receiveStep: step => dispatch(receiveStep(step))
});

export default connect(
    null,mapDispatchToProps
    )(stepListItem)
