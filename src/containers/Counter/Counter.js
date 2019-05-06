import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index'

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrement}  />
                <CounterControl label="Add 5" clicked={this.props.add5}  />
                <CounterControl label="Subtract 5" clicked={this.props.remove5}  />
                <hr/>
                <button onClick={() => this.props.addData(this.props.ctr)}>Add Data</button>
                <ul>
                    {this.props.storedResults.map((strResult) => {
                        return (
                            <li key={strResult.id} onClick={() => this.props.removeData(strResult.id)}>{strResult.value}</li>
                        )
                    })}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispathToProps = (dispath) => {
    return {
        onIncrementCounter: () => dispath(actionCreators.increment()),
        decrement: () => dispath(actionCreators.decrement()),
        add5: () => dispath(actionCreators.add5(5)),
        remove5: () => dispath(actionCreators.remove5(5)),
        addData: (result) => dispath(actionCreators.addData(result)),
        removeData: (id) => dispath(actionCreators.removeData(id))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Counter);