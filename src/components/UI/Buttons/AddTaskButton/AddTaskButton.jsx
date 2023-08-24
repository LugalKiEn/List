import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const AddTaskButton = ({clickHandler}) => {
    const {id} = useSelector(state => state.currentFormData)
    return (
        <button type="button" onClick={clickHandler}>{!id ? "Add task" : "Edit task"}</button>
    )
}

export default AddTaskButton;