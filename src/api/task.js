import { firebaseConfig } from "../../firebase-config";
import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

export async function getTaskList(user_id) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "tasks"));
    if (querySnapshot.empty) return [];
    let users = [];
    querySnapshot.forEach((doc) => {
        const item = schematize(doc);
        if (item.user_id === user_id) users.push(item);
    });
    return users;
}

export async function createTask(task, user_id) {
    const newTask = {
        ...task,
        isDone: false,
        user_id,
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const docRef = await addDoc(collection(db, "tasks"), newTask);
    return { ...newTask, id: docRef.id };
}

export async function updateTask(task) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    await updateDoc(doc(db, "tasks", task.id), {
        name: task.name,
        description: task.description,
        isDone: task.isDone,
    });
}

export async function deleteTask(task_id) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    await deleteDoc(doc(db, "tasks", task_id));
}

// internal functions
function schematize(doc) {
    return {
        id: doc.id,
        user_id: doc.data().user_id,
        name: doc.data().name,
        description: doc.data().description,
        isDone: doc.data().isDone,
    };
}
