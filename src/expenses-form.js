import React, { Component } from 'react';
import SingleInput from "./SingleInput";

class ExpensesForm extends React.Component{
    constructor(props) {
        super(props);
        this.changeExpense = this.changeExpense.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {amt: this.props.amt || 0, cat: this.props.cat || '', descr: this.props.descr || ''};
    }

    changeExpense(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    onClick(){
        this.props.addExpense(this.state);
        this.setState({amt: 0, cat: '', descr: ''});
    }

    render() {
        return (
            <div>
                <form>
                    <SingleInput type='number' placeholder='$' id='amt' content={this.state.amt} controlFunc={this.changeExpense}/>
                    <SingleInput type='text' placeholder='Category' id='cat' content={this.state.cat} controlFunc={this.changeExpense}/>
                    <SingleInput type='text' placeholder='Description' id='descr' content={this.state.descr} controlFunc={this.changeExpense}/>
                    <button onClick={this.onClick} type="button">{this.props.buttonText}</button>
                </form>
            </div>
        );
    }
}

export default ExpensesForm;