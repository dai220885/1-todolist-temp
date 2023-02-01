import React, {FC} from 'react';
import TaskList from "./TaskList";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    //tasks: TaskType[] //то же самое, что и Array<TaskType>
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList: FC<TodoListPropsType>= (props) : JSX.Element => {



    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
                <TaskList tasks={props.tasks}/>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;