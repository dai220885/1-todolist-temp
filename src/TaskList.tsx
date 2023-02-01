import React, {FC} from 'react';
import {TaskType, TodoListPropsType} from "./TodoList";



// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.

type StudentListType = {
    students: Array<string>
}

type TaskListType = {
    tasks: Array<TaskType>
}

export const TaskList: FC<TaskListType>= (props) : JSX.Element => {
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

export const StudentsList: FC<StudentListType>= (props) : JSX.Element => {

    const studentItems: JSX.Element[] | JSX.Element = props.students.length
        ? props.students.map((student) =>{
            return(
                        <option>{student}</option>

            )
        })
        : <span>Your studentList is empty</span>

    return (
        <select>
            {studentItems}
        </select>
    );
};
