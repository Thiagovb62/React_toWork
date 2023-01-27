// component in reac just a function that returns some jsx
// we can use arrow function or normal function
import './ExpenseItem.css';
import ExpenseDate from "../Date/ExpenseDate";
import Card from "../UI/Card";
import React,{useState} from "react";
import Expenses from "../Expenses/Expenses";
import card from "../UI/Card";
const expenseItem = (props) => {



    // eslint-disable-next-line react-hooks/rules-of-hooks
   const [title, setTitle] = useState(props.title);


    const clickHandler = () => {
        setTitle('Updated!');
    }
    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.date}/>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
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