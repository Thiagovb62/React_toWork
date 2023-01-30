import ExpenseItem from "../ExpensesItem/ExpenseItem";
import React, {useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
       setFilteredYear(selectedYear)
    }
    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseItem
                    title={props.items.at(0).title}
                    amount={props.items.at(0).amount}
                    date={props.items.at(0).date}
                />
                <ExpenseItem
                    title={props.items.at(1).title}
                    amount={props.items.at(1).amount}
                    date={props.items.at(1).date}
                />
                <ExpenseItem
                    title={props.items.at(2).title}
                    amount={props.items.at(2).amount}
                    date={props.items.at(2).date}
                />
            </Card>
        </div>
    )
    // return ( React.createElement(Card, {className: "expenses"},props.children),
    //     React.createElement(ExpenseItem, {title: props.items[0].title, amount: props.items[0].amount, date: props.items[0].date}),
    //     React.createElement(ExpenseItem, {title: props.items[1].title, amount: props.items[1].amount, date: props.items[1].date}),
    //     React.createElement(ExpenseItem, {title: props.items[2].title, amount: props.items[2].amount, date: props.items[2].date}));


}

export default Expenses;