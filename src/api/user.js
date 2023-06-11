import { firebaseConfig } from "../../firebase-config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";

const TEMPLATE_USER = {
    name: "New User",
};

const RESPONSE_CODES = {
    "auth/email-already-in-use": "Email ya está en uso",
    "auth/invalid-email": "Email no válido",
    "auth/operation-not-allowed": "Operación no permitida",
    "auth/weak-password": "Contraseña débil",
    "auth/too-many-requests": "Demasiadas solicitudes",
    "auth/user-disabled": "Usuario deshabilitado",
    "auth/user-not-found": "Usuario no encontrado",
    "auth/wrong-password": "Contraseña incorrecta",
    "auth/internal-error": "Error interno",
    "auth/email-already-exists": "Email ya existe",
    "auth/id-token-expired": "Token expirado",
    "auth/id-token-revoked": "Token revocado",
    "auth/invalid-argument": "Argumento no válido",
    "auth/success": "Login exitoso",
};

export async function register(email, password) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // insert uid into user object
    const user = { ...TEMPLATE_USER, uid: userCredential.user.uid };
    const docRef = await addDoc(collection(db, "users"), user);
    return {
        ...user,
        id: docRef.id,
    };
}

export async function login(email, password) {
    initializeApp(firebaseConfig);
    const auth = getAuth();
    const promise = () =>
        new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, email.trim(), password)
                .then((userCredential) => resolve(userCredential))
                .catch((error) => resolve(error));
        });
    const userCredential = await promise();
    const errorMessage = RESPONSE_CODES[userCredential.code];
    // get data of user
    let user = {};
    if (!!userCredential.user) {
        user = await getUserById(userCredential.user.uid);
        if (!Object.entries(user).length) {
            await logout();
            return { isAuthenticated: false, message: "Este usuario no tiene informacion, contactese con el administrador", user: null };
        }
    }
    // ? Quemo los datos aqui por ahora
    return {
        isAuthenticated: !!userCredential.user,
        message: errorMessage,
        user: {
            ...user,
            id: userCredential.user.uid,
        },
    };
}

export function logout() {
    initializeApp(firebaseConfig);
    const auth = getAuth();
    return signOut(auth);
}

export async function isAuth() {
    initializeApp(firebaseConfig);
    const auth = getAuth();
    if (!auth.currentUser) return { isAuthenticated: false, user: null };
    // get data of user
    let user = await getUserById(auth.currentUser.uid);
    return {
        isAuthenticated: !!auth.currentUser,
        user: {
            ...user,
            id: auth.currentUser.uid,
        },
    };
}

export async function getAllUsers() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "users"));
    if (querySnapshot.empty) return [];
    let users = [];
    querySnapshot.forEach((doc) => {
        users.push(doc.data());
    });
    return users;
}

export async function getUserById(id) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "users"));
    if (querySnapshot.empty) return [];
    let user = {};
    querySnapshot.forEach((doc) => {
        if (doc.id === id) {
            user = doc.data();
        }
    });
    return user;
}

export async function updateUser(id, data) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    await updateDoc(doc(db, "users", id), {
        ...data,
    });
}
