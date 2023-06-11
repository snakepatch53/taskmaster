import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../context/session";
import { createTask, getTaskList, updateTask, deleteTask as dellTask } from "../api/task";

export function useTasks() {
    const [mode, setMode] = useState("loading"); // "list" | "form" | "delete"
    const [task, setTask] = useState(null);
    const [tasks, setTasks] = useState([]);

    const { session } = useContext(SessionContext);

    useEffect(() => {
        getTaskList(session.id).then((_tasks) => {
            setTasks(_tasks);
            setMode("list");
        });
    }, []);

    const changeTaskState = (task_id) => {
        const _task = tasks.find((task) => task.id === task_id);
        if (!_task) return;
        _task.isDone = !_task.isDone;
        setMode("loading");
        updateTask(_task).then(() => {
            setTasks([...tasks]);
            setMode("list");
            setTask(null);
        });
    };

    const addTask = (newTask) => {
        setMode("loading");
        if (task) {
            setMode("list");
            updateTask(newTask).then(() => {
                const newTasks = tasks.map((_task) => {
                    if (_task.id === task.id) return newTask;
                    return _task;
                });
                setTasks(newTasks);
                setMode("list");
                setTask(null);
            });
            return;
        }
        createTask(newTask, session.id).then((newTask) => {
            setTasks([...tasks, newTask]);
            setMode("list");
            setTask(null);
        });
    };

    const openForm = (task_id) => {
        if (!task_id) return;
        const _task = tasks.find((task) => task.id === task_id);
        setMode("form");
        if (!_task) return;
        setTask(_task);
    };

    const openDelete = (task_id) => {
        if (!task_id) return;
        const _task = tasks.find((task) => task.id === task_id);
        if (!_task) return;
        setTask(_task);
        setMode("delete");
    };

    const deleteTask = () => {
        setMode("loading");
        dellTask(task.id).then(() => {
            const newTasks = tasks.filter((_task) => _task.id !== task.id);
            setTasks(newTasks);
            setMode("list");
            setTask(null);
        });
    };

    const cancelOperation = () => {
        setMode("list");
        setTask(null);
    };

    return {
        mode,
        task,
        tasks: tasks.sort((a, b) => (a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1)),
        changeTaskState,
        addTask,
        openForm,
        openDelete,
        deleteTask,
        cancelOperation,
    };
}
