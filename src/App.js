import './App.css';
import React, {useState} from 'react';
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

const DUMMY_DATA = [
    {
        id: 1,
        name: 'John',
        age: 20,
    },
    {
        id: 2,
        name: 'Jane',
        age: 21,
    },
    {
        id: 3,
        name: 'Jack',
        age: 22,
    }
];

function App() {
    const [users, setUsers] = useState(DUMMY_DATA);
    const addUserHandler = (user) => {
        setUsers((prevUsers) => {
            return [user, ...prevUsers];
        });
    }
    return (
        <div className="App">
            <header className="App-header">
                <AddUser onAddUser={addUserHandler}/>
                <UsersList users={users}/>
            </header>
        </div>
    );

}

export default App;
