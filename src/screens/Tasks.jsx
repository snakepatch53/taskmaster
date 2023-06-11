import TaskForm from "./TaskForm";
import ConfirmModal from "../components/ConfirmModal";
import Loading from "../components/Loading";
import TaskData from "./TaskData";
import { useTasks } from "../hooks/useTasks";

export default function Tasks() {
    const { mode, task, tasks, changeTaskState, openForm, openDelete, cancelOperation, addTask, deleteTask } = useTasks();
    return (
        <>
            {mode === "list" && <TaskData tasks={tasks} changeTaskState={changeTaskState} openForm={openForm} openDelete={openDelete} />}
            {mode === "form" && <TaskForm mode="edit" task={task} cancelOperation={cancelOperation} onSubmit={addTask} />}
            {mode === "delete" && (
                <ConfirmModal
                    title="¿Esta seguro de realizar esta accion?"
                    message="Esta acción no se puede deshacer"
                    pressCancel={cancelOperation}
                    pressYes={deleteTask}
                />
            )}
            {mode === "loading" && <Loading />}
        </>
    );
}
