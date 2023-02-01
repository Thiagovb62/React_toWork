import Card from "../UI/Card";
import React from "react";
import classes from "./AddUser.module.css";
const AddUser = (props ) => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }
  return (

    <div>
        <Card className={classes.input}>
            <form  onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input type="number"/>
                <button type="submit">Add User</button>
            </form>
        </Card>
    </div>
  );
}

export default AddUser;