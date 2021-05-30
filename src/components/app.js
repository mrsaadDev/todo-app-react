import React from 'react'
import AppHeader from "./app-header";
import SearchPanel from "./search-panel";
import ToDoList from "./todo-list";

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <ToDoList />
        </div>
    )
}

export default App