import React, { Component } from 'react';
import DeleteExpense from "./Delete-expense.js";
import ExpenseUpdaterForm from './expense-updater-form';

class Expense extends Component {
    render() {
        return(
            <li>
                ${this.props.amt} for {this.props.descr} ({this.props.cat}) | <DeleteExpense index={this.props.index} removeExpense={this.props.removeExpense}/>
                <ExpenseUpdaterForm updateExpense={this.props.updateExpense} index={this.props.index} buttonText='Update Expense' {...this.props} />
            </li>
        );
    }
}

export default Expense;