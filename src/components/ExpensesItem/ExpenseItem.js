// component in reac just a function that returns some jsx
// we can use arrow function or normal function
import './ExpenseItem.css';
import ExpenseDate from "../Date/ExpenseDate";
import Card from "../UI/Card";
import React,{useState} from "react";
const expenseItem = (props) => {

    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.date}/>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>)
    // return(  React.createElement(card, {className: "expense-item"},props.children),
    //     React.createElement(
    //         "div",
    //         {},
    //         React.createElement(ExpenseDate, {date: props.date})),
    //         React.createElement("div", {className: "expense-item__description"},
    //         React.createElement("h2", {}, props.title),
    //         React.createElement("div", {className: "expense-item__price"}, "$", props.amount)));

}

export default expenseItem;