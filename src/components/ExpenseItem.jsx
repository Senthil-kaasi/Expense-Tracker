import React from "react";
import "./ExpenseItem.css";
 
function ExpenseItem(){
    return (
        <div className="expense-item">
            <div>28 January 2022</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$297.69</div>
            </div>
        </div>
    )
}

export default ExpenseItem;