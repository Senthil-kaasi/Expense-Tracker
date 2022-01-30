import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

function NewExpenses(props){

    const addExpense = (newExpense)=>{
        props.addExpenseHandler(newExpense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense={addExpense}/>
        </div>
    )
};

export default NewExpenses;