import React, {FC} from 'react';
import {TaskType} from "./TodoList";


type TaskListType = {
    tasks: Array<TaskType>
}

const TaskList: FC<TaskListType>= (props) : JSX.Element => {
    const taskItems: JSX.Element[] | JSX.Element = props.tasks.length
        ? props.tasks.map((task) =>{
            return(
                <li key={task.id}> {/*key нужен для того, чтобы при изменении списка (перерендеринг) React понимал, какой элемент из списка добавился, а какой уже был ранее*/}
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                </li>
            )
        })
        : <span>Your tasksList is empty</span>
    return (
        <ul>
            {taskItems}
        </ul>
    );
};

export default TaskList;