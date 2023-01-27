// component in reac just a function that returns some jsx
// we can use arrow function or normal function
import './ExpenseItem.css';
import ExpenseDate from "./Date/ExpenseDate";
import Card from "./Card/Card";
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
}

export default expenseItem;