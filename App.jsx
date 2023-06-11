import Main from "./src/screens/Main";
import { SessionProvider } from "./src/context/session";

export default function App() {
    return (
        <SessionProvider>
            <Main />
        </SessionProvider>
    );
}
