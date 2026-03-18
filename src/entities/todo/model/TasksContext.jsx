import { createContext, useMemo } from "react";
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

    const value = useMemo(()=> ({
        tasks,
        filteredTasks,
        toggleTaskComplete,
        deleteTask,
        deleteAllTasks,
        addTask,
        newTaskInputRef,
        searchQuery,
        setSearchQuery,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    }), [
        tasks,
        filteredTasks,
        toggleTaskComplete,
        deleteTask,
        deleteAllTasks,
        addTask,
        newTaskInputRef,
        searchQuery,
        setSearchQuery,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    ]
)

    return (
        <TasksContext.Provider value = {value}> 
             {children}
        </TasksContext.Provider>
    )
}