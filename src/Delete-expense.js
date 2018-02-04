import React, { Component } from 'react';
import Expense from "./expense";

class DeleteExpense extends Component{
    constructor(props){
        super(props);
        this.removeThisExpense = this.removeThisExpense.bind(this);
        // this.state = {index: this.props.index};
    }

    removeThisExpense(){
        this.props.removeExpense(this.props.index);
    }

    render() {
        return(
            <button type='button' onClick={this.removeThisExpense}>Delete</button>
        );
    }
}

export default DeleteExpense;