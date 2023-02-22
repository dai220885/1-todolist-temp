import React, {FC, MouseEvent} from 'react';
import {TaskType, TodoListPropsType} from "./TodoList";



// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.

type StudentListType = {
    students: Array<string>
    callBack: (value: string)=>void
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

    const onClickHandler =(e: MouseEvent<HTMLSelectElement>)=>{
        //debugger
        console.log(e.currentTarget.value)
        return props.callBack(e.currentTarget.value)} // передаем выбранного студента в коллБэк функцию

    //studentItems будет массив jsx элементов (JSX.Element[]) или одиночный jsx элемент (JSX.Element).
    // если пришедший в пропсах массив студентов имеет длину(не пустой), то применяем к нему метод map, иначе возвнащаем спан с надписью, что список студентов пуст (Your studentList is empty)
    const studentItems: JSX.Element[] | JSX.Element = props.students.length
        ? props.students.map((student) =>{
            return(
                        <option>{student}</option>//оборачиваем каждого студента из массива в тег option, чтобы потом "засунуть" их в выпадающий список
            )
        })
        : <span>Your studentList is empty</span>

    return (
        // с помощью онКлик получаем выбранного студента (имя которого находится в соответствующем теге option, полученном после пропускания массива students через метод map
        <select onClick={onClickHandler}>
            {studentItems}
        </select>
    );
};
