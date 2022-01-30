import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props){

    const yearChangeHandler = function(event){
        const selectedYear = event.target.value;
        props.onSelect(selectedYear);
    }

    return(
        <div className="expenses-filter expenses-filter__control">
            <label>Filter by year</label>
            <select onChange={yearChangeHandler}>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;