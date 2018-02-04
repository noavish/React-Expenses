import ExpensesForm from "./expenses-form";

class ExpenseUpdaterForm extends ExpensesForm {
    onClick(){
        this.props.updateExpense(this.state, this.props.index);
    }
}

export default ExpenseUpdaterForm;