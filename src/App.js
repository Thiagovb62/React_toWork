import './App.css';
import React from 'react';
import ExpenseItem from "./components/ExpenseItem";
function App() {
   const expenses = [
         {
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
         },
            {
            title: 'New TV',
            amount: 799.49,
            date: new Date(2021, 2, 12),
            },
            {
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
            }
    ];


  return (
    <div className="App">
      <header className="App-header">
          <h2>List of Expenses</h2>
        <ExpenseItem
            title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}
        >
        </ExpenseItem>
          <ExpenseItem
              title={expenses[1].title}
              amount={expenses[1].amount}
              date={expenses[1].date}
          >
          </ExpenseItem>
          <ExpenseItem
              title={expenses[2].title}
              amount={expenses[2].amount}
              date={expenses[2].date}
          >
          </ExpenseItem>
      </header>
    </div>
  );
}

export default App;
