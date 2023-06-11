import { useRef, useState } from "react";

export function useTaskForm({ task, onSubmit, cancelOperation }) {
    const descriptionRef = useRef();
    const [name, setName] = useState(task?.name);
    const [description, setDescription] = useState(task?.description);
    const [message, setMessage] = useState("");
    const handleSubmit = () => {
        if (!validation()) return;
        const newTask = {
            ...task,
            name,
            description,
        };
        onSubmit(newTask);
    };

    const validation = () => {
        if (!name) return setMessage("Ingrese el nombre de la tarea");
        if (!description) return setMessage("Ingrese la descripción de la tarea");
        return true;
    };

    return {
        name,
        setName,
        description,
        setDescription,
        message,
        handleSubmit,
        cancelOperation,
        descriptionRef,
    };
}
