import { useContext } from "react";
import { SessionContext } from "../context/session";
import Home from "./Home";
import Login from "./Login";
import { NativeRouter, Route, Routes } from "react-router-native";
import Header from "../components/Header";
import { StatusBar, Text } from "react-native";
import Navbar from "../components/Navbar";
import Tasks from "./Tasks";
import Loading from "../components/Loading";

export default function Main() {
    const { session } = useContext(SessionContext);

    StatusBar.setTranslucent(true);
    if (session) {
        StatusBar.setBackgroundColor("#7298cc");
        StatusBar.setBarStyle("light-content");
    } else {
        StatusBar.setBackgroundColor("#ffffff");
        StatusBar.setBarStyle("dark-content");
    }

    if (!session == null) return <Loading />;
    return (
        <>
            {session ? (
                <NativeRouter initialEntries={["/home"]}>
                    <Header />
                    <Routes>
                        <Route path="/home" exact element={<Home />} />
                        <Route path="/tasks" exact element={<Tasks />} />
                        <Route path="/profile" exact element={<Text>Profile</Text>} />
                    </Routes>
                    <Navbar />
                </NativeRouter>
            ) : (
                <Login />
            )}
        </>
    );
}
