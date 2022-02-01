import React,{useState} from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

function NewExpenses(props){
    const [isAddButtonClicked,setIsAddButtonClicked] = useState(false);

    const addExpense = (newExpense)=>{
        props.addExpenseHandler(newExpense);
    }

    const clickHandler = (boolValue)=>{
        setIsAddButtonClicked(boolValue);
    }

    return (
        <div className="new-expense">
            {isAddButtonClicked || 
                <button
                    onClick={()=>{clickHandler(true)}}>Add New Expense</button>}
            {isAddButtonClicked && 
                <ExpenseForm 
                    onAddExpense={addExpense}
                    onClickHandler = {clickHandler}    
                />}
        </div>
    )
};

export default NewExpenses;