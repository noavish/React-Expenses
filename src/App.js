import React, { Component } from 'react';
import './App.css';
import ExpenseDisplay from "./expense-display";
import ExpensesForm from './expenses-form';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = { expenses: [] };
        this.addExpense = this.addExpense.bind(this);
        this.removeExpense = this.removeExpense.bind(this);
        this.updateExpense = this.updateExpense.bind(this);
    }

    addExpense(expense) {
        this.setState({expenses: this.state.expenses.concat(expense)},()=>{
            console.log(this.state.expenses);
        });
    }

    removeExpense(index) {
        this.setState((prevState) => {return {expenses: prevState.expenses.filter((item, i)=>{return (i !== index);})}});
    }

    updateExpense(expense, index) {
        this.setState((prevState) => {return {expenses: prevState.expenses.map((item, i)=>{return i == index ? expense : item})}});
    }

    render() {
        return (
          <div className="App">
              <ExpensesForm addExpense={this.addExpense} buttonText='Add Expenses'/>
              <ExpenseDisplay expenses={this.state.expenses} removeExpense={this.removeExpense} updateExpense={this.updateExpense} />
          </div>
        );
    }
}

export default App;
