import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>React Redux Counter App !!!</h1>
                <p><strong>Counter</strong> : {this.props.counter}</p>
                <p><button onClick={this.props.onIncrement}>INCREMENT</button></p>
                <p><button onClick={this.props.onDecrement}>DECREMENT</button></p>
                <p><button onClick={this.props.onIncrementFive}>ADD_FIVE</button></p>
                <p><button onClick={this.props.onDecrementFive}>DEREMENT_FIVE</button></p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter : state.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT', }),
        onDecrement: () => dispatch({ type: 'DECREMENT', }),
        onIncrementFive: () => dispatch({ type: 'ADD_FIVE', }),
        onDecrementFive: () => dispatch({ type: 'DEC_FIVE', }),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);