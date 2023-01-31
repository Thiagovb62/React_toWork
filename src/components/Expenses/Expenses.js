import ExpenseItem from "../ExpensesItem/ExpenseItem";
import React, {useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";



const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
       setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <li>
                <Card className="expenses">
                    <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
                    <ExpenseList items={filteredExpenses}/>
                </Card>
            </li>
        </div>
    )
    // return ( React.createElement(Card, {className: "expenses"},props.children),
    //     React.createElement(ExpenseItem, {title: props.items[0].title, amount: props.items[0].amount, date: props.items[0].date}),
    //     React.createElement(ExpenseItem, {title: props.items[1].title, amount: props.items[1].amount, date: props.items[1].date}),
    //     React.createElement(ExpenseItem, {title: props.items[2].title, amount: props.items[2].amount, date: props.items[2].date}));


}

export default Expenses;