import React,{useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm(props){
    const [userInput,setUserInput] = useState({
        enteredTitle:"",
        enteredAmount:"",
        enteredDate:""
    });

    const changeHandler = (event) =>{
        const {name,value}= event.target;
        setUserInput((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        });
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title:userInput.enteredTitle,
            amount:+userInput.enteredAmount,
            date:new Date(userInput.enteredDate)
        }
        setUserInput({
            enteredTitle:"",
            enteredAmount:"",
            enteredDate:""
        });
        props.onAddExpense(expenseData);
        props.onClickHandler(false);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        onChange={changeHandler} 
                        name="enteredTitle" 
                        value={userInput.enteredTitle}    
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        onChange={changeHandler} 
                        name="enteredAmount"
                        value={userInput.enteredAmount}     
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        onChange={changeHandler} 
                        name="enteredDate"
                        value={userInput.enteredDate} 
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                    <button onClick={()=>{props.onClickHandler(false)}}>Cancel</button>
                    <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;