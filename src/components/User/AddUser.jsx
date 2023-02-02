import Card from "../UI/Card";
import React, {useState} from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props ) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                mensg: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                mensg: 'Please enter a valid age (> 1).'
            })
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const errorHandler = () => {
        setError(null);
    }
  return (

    <Wrapper>
        {error && <ErrorModal title={error.title} message={error.mensg} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form  onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </Wrapper>
  );
}

export default AddUser;