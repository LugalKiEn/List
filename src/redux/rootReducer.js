import { 
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
    IS_FORM_VISIBLE,
    CURRENT_FORM_DATA,
    LOAD_TASKS,
 } from "./types";

 const initialStore = {
    tasks: [],
    isFormVisible: false,
    currentFormData: {},
 }
 export default function rootReduser(store = initialStore, action) {
    switch (action.type) {

        case ADD_TASK:
            if (action.payload.parentId) {
                return {...store, tasks: store.tasks.map((task) =>
                    task.id === action.payload.parentId ? { ...task, subtasks: [...task.subtasks, action.payload ]} : task
                )};
            }
            return {...store, tasks: [...store.tasks, action.payload]}

        case DELETE_TASK:
            const deleteIndex = [...store.tasks].findIndex(item => item.id == action.payload);
            if (deleteIndex != -1) {;
                return {...store, tasks: [
                    ...store.tasks.slice(0, deleteIndex),
                    ...store.tasks.slice(deleteIndex + 1)
                ]}
            } else {
                store.tasks.forEach((task) => {task.subtasks =  [...task.subtasks.filter(subtask => subtask.id != action.payload)]});
                return {...store}
            }

        case EDIT_TASK:
            const changeIndex = [...store.tasks].findIndex(item => item.id == action.payload.id);
            if (changeIndex != -1) {
                return {...store, tasks: [
                    ...store.tasks.slice(0, changeIndex),
                    {...action.payload},
                    ...store.tasks.slice(changeIndex + 1)]
                }
            } else {
                const changeTopIndex = store.tasks.findIndex(item => item.id == action.payload.parentId);
                const changeSubIndex = store.tasks[changeTopIndex].subtasks.findIndex(subtask => subtask.id == action.payload.id);
                return {...store, tasks: [
                    ...store.tasks.slice(0, changeTopIndex),
                    {...store.tasks[changeTopIndex], subtasks: [
                        ...store.tasks[changeTopIndex].subtasks.slice(0, changeSubIndex),
                        {...action.payload},
                        ...store.tasks[changeTopIndex].subtasks.slice(changeSubIndex + 1),
                    ]},
                    ...store.tasks.slice(changeTopIndex + 1)]
                }
            }
        case LOAD_TASKS:
            return {...store, tasks: action.payload}

        case IS_FORM_VISIBLE:
            return {...store, isFormVisible: action.payload}

        case CURRENT_FORM_DATA:
            return {...store, currentFormData: {...action.payload}}

        default:
            return {...store}
    }
}