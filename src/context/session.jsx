import { createContext, useEffect, useState } from "react";
import * as user from "../api/user";

export const SessionContext = createContext();

export function SessionProvider({ children }) {
    const [session, setSession] = useState(null);

    useEffect(() => {
        user.isAuth().then((response) => {
            if (response.isAuthenticated) setSession(response.user);
        });
    }, []);

    const login = (email, password) => {
        return user.login(email, password).then((response) => {
            if (!response.isAuthenticated) return response.message;
            setSession(response.user);
        });
    };

    const logout = () => {
        return user.logout().then(() => {
            setSession(null);
        });
    };

    return (
        <SessionContext.Provider
            value={{
                session,
                login,
                logout,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}
