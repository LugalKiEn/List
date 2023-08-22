import React, { useState, useEffect } from 'react';

const AddTaskButton = ({clickHandler}) => {
    return (
        <button type="button" onClick={clickHandler}>Add task</button>
    )
}

export default AddTaskButton;