import './App.css';
import React, {useState} from 'react';
import AddUser from "./components/User/AddUser";

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
    }
];
function App() {

    return (
        <div className="App">
            <header className="App-header">
                <AddUser/>
            </header>
        </div>
    );

}

export default App;
