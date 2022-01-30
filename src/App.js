import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const [expenses,setExpenses] = useState([
    {
      title:"Car Insurance",
      amount:297.69,
      date:new Date(2022,0,29)
    },
    {
      title:"Laptop",
      amount:700,
      date:new Date(2022,0,31)
    },
    {
      title:"Gym fee",
      amount:"50",
      date:new Date(2022,1,1)
    },
    {
      title:"College fee",
      amount:3000,
      date:new Date(2021,7,15)
    }
  ]);

  const addExpenseHandler = function(newExpense){
    setExpenses((prevState)=>{
      return[...prevState,newExpense];
    })
  }


  return (
    <div>
      <NewExpenses addExpenseHandler={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
