import { useContext, useEffect, useRef, useState } from "react";
import { SessionContext } from "../context/session";

export function useLogin() {
    const inputPass = useRef(null);
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useContext(SessionContext);

    const handleSubmit = async () => {
        if (email === "") return setMessage("Ingrese su email");
        else if (!validateEmail(email)) return setMessage("Email invalido");
        else if (password === "") return setMessage("Ingrese su contraseña");
        else if (password.length < 6) return setMessage("La contraseña debe tener al menos 6 caracteres");
        setLoading(true);
        login(email, password).then((message) => {
            setMessage(message);
            setLoading(false);
        });
    };

    useEffect(() => {
        if (email === "") setMessage("");
        else if (!validateEmail(email)) setMessage("Email invalido");
        else setMessage("");
    }, [email]);

    useEffect(() => {
        if (password === "") setMessage("");
        else if (password.length < 6) setMessage("La contraseña debe tener al menos 6 caracteres");
        else setMessage("");
    }, [password]);

    return {
        inputPass,
        message,
        email,
        password,
        setEmail,
        setPassword,
        handleSubmit,
        loading,
    };
}

// internal functions
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
