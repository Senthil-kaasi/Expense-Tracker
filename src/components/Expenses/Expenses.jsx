import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../NewExpenses/ExpenseFilter";

function Expenses({expenses}){
    const [filterYear,setFilterYear] = useState("");

    const selectHandler = function(selectedYear){
        setFilterYear(selectedYear);
        console.log(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter onSelect={selectHandler} />
            {expenses.map((expense,id)=>{
                    return <ExpenseItem 
                                key={id}
                                title={expense.title} 
                                amount={expense.amount} 
                                date={expense.date}/>
                }) }
        </Card>
        
    )
}

export default Expenses;