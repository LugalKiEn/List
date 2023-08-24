import { 
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
    IS_FORM_VISIBLE,
    CURRENT_FORM_DATA,
    LOAD_TASKS
 } from "./types";

export const addTask = (payload) => ({
    type: ADD_TASK,
    payload: payload,
});

export const deleteTask = (payload) => ({
    type: DELETE_TASK,
    payload: payload,
});

export const editTask =  (payload) => ({
    type: EDIT_TASK,
    payload: payload,
})

export const setIsFormVisible =  (payload) => ({
    type: IS_FORM_VISIBLE,
    payload: payload,
})

export const setCurrentFormData =  (payload) => ({
    type: CURRENT_FORM_DATA,
    payload: payload,
})

export const loadTasks =  (payload) => ({
    type: LOAD_TASKS,
    payload: payload,
})