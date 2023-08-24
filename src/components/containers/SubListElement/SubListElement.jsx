import React, { useState, useEffect } from 'react';
import ChangeTaskButton from '../../UI/Buttons/ChangeTaskButton/ChangeTaskButton';
import DeleteTaskButton from '../../UI/Buttons/DeleteTaskButton/DeleteTaskButton';
import "./ListElement.css";
import CheckBox from '../../UI/CheckBox/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask, setIsFormVisible, setCurrentFormData } from '../../../redux/actions';


const SubListElement = ({id, title, description, completion, subtasks}) => {
    // const transferCheckbox = () => {
    //     checkHandler(id);
    // }
    // const transferDelete = () => {
    //     deleteHandler(id);
    // }
    const dispatch = useDispatch();

    const deleteTaskHandler = () => {
        dispatch(deleteTask(id));
    }
    const checkTaskHandler = () => {
        dispatch(editTask({
            id: id,
            title: title,
            description: description,
            completion: !completion,
            level: 2,
        }));
    }
    const changeTaskHandler = () => {
        dispatch(setCurrentFormData({
            id: id,
            title: title,
            description: description,
            completion: completion,
            level: 2,
        }));
    }
    return (
        <div className={"list-element-container"}>
            <div className={"list-element-header"}>
                <h2 className={'list-element-title'}>{title}</h2>
                <div className={'list-element-navigation'}>
                    <CheckBox checked={completion} checkHandler={checkTaskHandler}/>
                    <ChangeTaskButton changeHandler={changeTaskHandler}/>
                    <DeleteTaskButton deleteHandler={deleteTaskHandler}/>
                </div>
            </div>
            <p className={"list-element-description"}>{description}</p>
        </div>
    )
}

export default SubListElement;