import {connect} from 'react-redux';
import Counter from './counter';
import counterActions from './counter.actions';
import { bindActionCreators } from "redux";

const mapStateToProps = (state)=>{
    return{
        data: state.data
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        actions: bindActionCreators(action, dispatch)
    }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer