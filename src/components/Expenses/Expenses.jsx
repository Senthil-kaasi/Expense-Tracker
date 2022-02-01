import React,{useState} from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

import "./Expenses.css";

function Expenses({expenses}){
    const [filterYear,setFilterYear] = useState("2022");

    const selectHandler = function(year){
        setFilterYear(year);
    }

    let filteredExpenses = expenses.filter((expense)=>{
        return filterYear === expense.date.getFullYear().toString();
    });

    return (
        <Card className="expenses">
            <ExpenseFilter onSelect={selectHandler} value={filterYear}/>
            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
        
    )
}

export default Expenses;