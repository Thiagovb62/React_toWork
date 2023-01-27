import ExpenseItem from "../ExpensesItem/ExpenseItem";
import React from "react";
import './Expenses.css';
import Card from "../UI/Card";
const Expenses = (props) => {

    return (
        <Card className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
        </Card>
    )
    // return ( React.createElement(Card, {className: "expenses"},props.children),
    //     React.createElement(ExpenseItem, {title: props.items[0].title, amount: props.items[0].amount, date: props.items[0].date}),
    //     React.createElement(ExpenseItem, {title: props.items[1].title, amount: props.items[1].amount, date: props.items[1].date}),
    //     React.createElement(ExpenseItem, {title: props.items[2].title, amount: props.items[2].amount, date: props.items[2].date}));


}

export default Expenses;