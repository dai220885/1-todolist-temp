import React, {FC} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

const App: FC = (): JSX.Element => {
    //BLL:
    const todoListTitle: string = "What to learn";
    const tasks: Array<TaskType> = [
        {id: 1, title: "HTML, CSS", isDone: true},
        {id: 2, title: "Js", isDone: true},
        {id: 3, title: "React and Redux", isDone: false},
        {id: 4, title: "Node.js", isDone: false},
    ]

    //UI:
    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={tasks}/>
            <TodoList title={todoListTitle} tasks={tasks}/>
            <TodoList title={todoListTitle} tasks={tasks}/>
        </div>
    );
}

export default App;
