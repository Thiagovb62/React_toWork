import './App.css';
import React, {useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from './components/Expenses/Expenses';


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];
function App() {
    const  [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
       setExpenses((prevExpenses) => {
           return [expense, ...prevExpenses];
       })
    }
    return (
        <div className="App">
            <header className="App-header">
                <h2 className="title">List of Expenses</h2>
                <NewExpense onAddExpense={addExpenseHandler}/>
                <Expenses items={expenses}/>
            </header>

        </div>
    );

    // return React.createElement(
    //     "div",
    //     {},
    //     React.createElement("h2", {}, "List of Expenses"),
    //     React.createElement(Expenses, {items: expenses}));
}

export default App;
