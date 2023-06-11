import { useContext } from "react";
import { SessionContext } from "../context/session";
import Home from "./Home";
import Login from "./Login";
import { NativeRouter, Route, Routes } from "react-router-native";
import Header from "../components/Header";

export default function Main() {
    const { session } = useContext(SessionContext);
    return (
        <>
            {session ? (
                <NativeRouter>
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                    </Routes>
                </NativeRouter>
            ) : (
                <Login />
            )}
        </>
    );
}
