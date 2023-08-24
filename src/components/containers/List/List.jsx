import React, { useState, useEffect } from 'react';
import ListElement from '../ListElement/ListElement';
import Form from '../Form/Form';
import ShowForm from '../../UI/Buttons/ShowForm/ShowForm';
import "./List.css";
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, editTask, setIsFormVisible, setCurrentFormData } from '../../../redux/actions';


const List = () => {
    const dispatch = useDispatch();
    const {tasks, isFormVisible, currentFormData} = useSelector(state => state);
  
    // const addTaskHandler = (title, description) => {   
    //     if (title) {     
    //         dispatch(addTask(
    //             {
    //                 id: Date.now(),
    //                 title: title,
    //                 description: description ? description : "",
    //                 completion: false,
    //                 subtasks: []
    //             }
    //         ));
    //         showForm();
    //     } else {
    //         alert("title field is empty");
    //     }
    // }

    // const checkTaskHandler = (id, title, description, completion, subtasks) => {
        // setTasks(tasks.map(task => task.id !== id ? task : {
        //     id: task.id,
        //     title: task.title,
        //     description: task.description ? task.description : "",
        //     completion: !task.completion,
        // }))
        // dispatch(editTask(
        //     {
        //         id: id,
        //         title: title,
        //         description: description,
        //         completion: completion,
        //         subtasks: subtasks
        //     }
        //     )
        // )
    // }

    // const changeTaskHandler = (id) => {
    //     dispatch(editTask({id}))
    // }

    // const deleteTaskHandler = (id) => {
    //     // const index = tasks.findIndex(item => item.id == id);
    //     // setTasks(tasks.filter(item => item.id != id));
    //     dispatch(deleteTask(id))
    // }

    const showForm = () => {
        dispatch(setIsFormVisible(!isFormVisible));
    }

    return (
        <div className={"container"}>
            <Form 
                isVisible={isFormVisible} 
                // clickHandler={addTaskHandler}
                // id={id}
                // title={title}
            />
            {tasks && tasks.map((elem) => {
               return <ListElement 
                id={elem.id} 
                key={elem.id} 
                title={elem.title} 
                description={elem.description} 
                completion={elem.completion}
                subtasks={elem.subtasks}
                level={1}
                // checkHandler={checkTaskHandler}
                // changeHandler={changeTaskHandler}
                // deleteHandler={deleteTaskHandler}
                >
                    {elem.subtasks && elem.subtasks.map((subelem) => {
                        return <ListElement 
                        id={subelem.id} 
                        parentId={elem.id}
                        key={subelem.id} 
                        title={subelem.title} 
                        description={subelem.description} 
                        completion={subelem.completion}
                        level={2}
                        // checkHandler={checkTaskHandler}
                        // changeHandler={changeTaskHandler}
                        // deleteHandler={deleteTaskHandler}
                        />
                    })}
                </ListElement>
            })}
            <ShowForm clickHandler={showForm}/>
        </div>
    );
}

export default List;