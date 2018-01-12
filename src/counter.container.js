import {connect} from 'react-redux';
import Counter from './counter';
import * as counterActions from './counter.actions';
import { bindActionCreators } from "redux";

export default connect(
    (state)=>({
        data: state.counter.data
    }),
    (dispatch)=>({
        actions: bindActionCreators(counterActions, dispatch)
    })
)(Counter)


export default CounterContainer
