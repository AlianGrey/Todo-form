import { createContext } from "react";
import useTasks from "./useTasks";
import useIncompleteTaskScroll from "./useIncompleteTaskScroll";

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
    const {children} = props

    const {
        tasks,
        filteredTasks,
        toggleTaskComplete,
        deleteTask,
        deleteAllTasks,
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        newTaskInputRef,
        searchQuery,
        setSearchQuery,
        disappearingTaskId,
        appearingTaskId,
    } = useTasks()
    
    const {
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    } = useIncompleteTaskScroll(tasks)

    return (
        <TasksContext.Provider
            value = {{
                tasks,
                filteredTasks,
                firstIncompleteTaskRef,
                firstIncompleteTaskId,
                toggleTaskComplete,
                deleteTask,
                deleteAllTasks,
                addTask,
                newTaskTitle,
                setNewTaskTitle,
                newTaskInputRef,
                searchQuery,
                setSearchQuery,
                disappearingTaskId,
                appearingTaskId,
            }}> 
             {children}
        </TasksContext.Provider>
    )
}