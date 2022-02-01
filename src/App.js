import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";


function App() {
  const [arrayKey,setArrayKey] = useState(5);
  const [expenses,setExpenses] = useState([
    {
      id:'a1',
      title:"Car Insurance",
      amount:297.69,
      date:new Date(2020,0,29)
    },
    {
      id:'a2',
      title:"Laptop",
      amount:700,
      date:new Date(2020,0,31)
    },
    {
      id:'a3',
      title:"Gym fee",
      amount:"50",
      date:new Date(2019,1,1)
    },
    {
      id:'a4',
      title:"College fee",
      amount:3000,
      date:new Date(2021,7,15)
    }
  ]);

  const addExpenseHandler = function(newExpense){
    newExpense.id=`a${arrayKey}`;
    setArrayKey((prevKey)=>{
      return prevKey+1;
    });

    setExpenses((prevState)=>{
      return[newExpense,...prevState];
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
