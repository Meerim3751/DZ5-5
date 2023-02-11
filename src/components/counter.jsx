import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    incrementCounter,
    decrementCounter,
    addCounter,
    subtractCounter,
    fetchCounter,
    reloadCounter
} from "../store/action";

class Counter extends Component {

    componentDidMount() {
        this.props.fetchCounter();
        this.props.reloadCounter()
    }


    render() {
        return (
            <div className="text-center">
                <h1>{this.props.number}</h1>
                <button onClick={this.props.incrementCounter} className="mr-[5px] border p-[3px]">increase</button>
                <button onClick={this.props.decrementCounter} className="mr-[5px] border p-[3px]">decrease</button>
                <button onClick={this.props.incrementByCounter} className="mr-[5px] border p-[3px]">increase by 5</button>
                <button onClick={this.props.decrementByCounter} className="mr-[5px] border p-[3px]">decrease by 5</button>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        number: state.counter
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        incrementCounter: () => dispatch(incrementCounter()),
        decrementCounter: () => dispatch(decrementCounter()),
        incrementByCounter: () => dispatch(addCounter(5)),
        decrementByCounter: () => dispatch(subtractCounter(5)),
        fetchCounter: () => dispatch(fetchCounter()),
        reloadCounter: () => dispatch(reloadCounter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);