import './App.css';
import React from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from './components/Expenses/Expenses';
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
                <h2 className="title">List of Expenses</h2>
                <NewExpense/>
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
