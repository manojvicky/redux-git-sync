import { connect } from 'react-redux'; 
import Counter from './counter';
import * as counterActions from './counter.action';
import counterReducer from './counter.reducer';
import { bindActionCreators } from "redux";

export default connect(
    (state)=>(
    {
        data: state.counterReducer.data
    }),
    (dispatch)=>({
         actions: bindActionCreators(counterActions, dispatch)
    })
)(Counter);

